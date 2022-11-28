from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegisterElasticIPRequest:
    elastic_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticIp') }})
    stack_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    
