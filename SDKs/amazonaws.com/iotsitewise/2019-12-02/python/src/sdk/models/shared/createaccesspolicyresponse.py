from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateAccessPolicyResponse:
    access_policy_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyArn' }})
    access_policy_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyId' }})
    
