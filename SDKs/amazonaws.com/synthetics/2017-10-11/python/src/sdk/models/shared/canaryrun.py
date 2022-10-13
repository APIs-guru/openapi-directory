from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import canaryrunstatus
from . import canaryruntimeline


@dataclass_json
@dataclass
class CanaryRun:
    artifact_s3_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactS3Location' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[canaryrunstatus.CanaryRunStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    timeline: Optional[canaryruntimeline.CanaryRunTimeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeline' }})
    
