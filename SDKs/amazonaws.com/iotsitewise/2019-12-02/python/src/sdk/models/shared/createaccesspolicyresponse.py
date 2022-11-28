from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateAccessPolicyResponse:
    access_policy_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyArn') }})
    access_policy_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyId') }})
    
