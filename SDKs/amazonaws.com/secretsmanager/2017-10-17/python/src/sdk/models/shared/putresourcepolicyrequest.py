from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutResourcePolicyRequest:
    resource_policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourcePolicy') }})
    secret_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretId') }})
    block_public_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockPublicPolicy') }})
    
