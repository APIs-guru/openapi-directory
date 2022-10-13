from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ValidateResourcePolicyRequest:
    resource_policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourcePolicy' }})
    secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretId' }})
    
