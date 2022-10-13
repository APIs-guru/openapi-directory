from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourcePolicy:
    policy_document: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDocument' }})
    policy_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyId' }})
    ram_resource_share_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ramResourceShareRegion' }})
    
