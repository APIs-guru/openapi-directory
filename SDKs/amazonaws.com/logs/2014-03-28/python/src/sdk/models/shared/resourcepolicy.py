from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourcePolicy:
    last_updated_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedTime' }})
    policy_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDocument' }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyName' }})
    
