from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlerpcpreconditionfailureviolation


@dataclass_json
@dataclass
class GoogleRPCPreconditionFailure:
    violations: Optional[List[googlerpcpreconditionfailureviolation.GoogleRPCPreconditionFailureViolation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violations' }})
    
