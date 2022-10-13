from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import videojobstatus_enum
from . import textdetectionresult
from . import videometadata


@dataclass_json
@dataclass
class GetTextDetectionResponse:
    job_status: Optional[videojobstatus_enum.VideoJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    text_detections: Optional[List[textdetectionresult.TextDetectionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextDetections' }})
    text_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextModelVersion' }})
    video_metadata: Optional[videometadata.VideoMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VideoMetadata' }})
    
