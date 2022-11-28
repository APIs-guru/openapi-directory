from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutContainerPolicyInput:
    container_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerName') }})
    policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    
