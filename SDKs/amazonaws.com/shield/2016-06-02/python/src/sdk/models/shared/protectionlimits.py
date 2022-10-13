from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import limit


@dataclass_json
@dataclass
class ProtectionLimits:
    protected_resource_type_limits: List[limit.Limit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtectedResourceTypeLimits' }})
    
