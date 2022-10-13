from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import automotivepartscompatibilitypolicy
from . import error


@dataclass_json
@dataclass
class AutomotivePartsCompatibilityPolicyResponse:
    automotive_parts_compatibility_policies: Optional[List[automotivepartscompatibilitypolicy.AutomotivePartsCompatibilityPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automotivePartsCompatibilityPolicies' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
