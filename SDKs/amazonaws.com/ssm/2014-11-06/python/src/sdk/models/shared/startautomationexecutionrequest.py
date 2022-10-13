from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import executionmode_enum
from . import tag
from . import targetlocation
from . import target


@dataclass_json
@dataclass
class StartAutomationExecutionRequest:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    document_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentName' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrency' }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxErrors' }})
    mode: Optional[executionmode_enum.ExecutionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    target_locations: Optional[List[targetlocation.TargetLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLocations' }})
    target_maps: Optional[List[dict[str, List[str]]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetMaps' }})
    target_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetParameterName' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
