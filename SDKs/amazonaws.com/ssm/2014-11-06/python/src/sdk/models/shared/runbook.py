from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetlocation
from . import target


@dataclass_json
@dataclass
class Runbook:
    document_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentName' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrency' }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxErrors' }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    target_locations: Optional[List[targetlocation.TargetLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLocations' }})
    target_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetParameterName' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
