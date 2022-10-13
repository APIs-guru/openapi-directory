from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import edgepresetdeploymentstatus_enum
from . import edgepresetdeploymenttype_enum


@dataclass_json
@dataclass
class EdgePresetDeploymentOutput:
    artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Artifact' }})
    status: Optional[edgepresetdeploymentstatus_enum.EdgePresetDeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    type: edgepresetdeploymenttype_enum.EdgePresetDeploymentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
