from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutResourcePolicyRequest:
    block_public_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockPublicPolicy' }})
    resource_policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourcePolicy' }})
    secret_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretId' }})
    
