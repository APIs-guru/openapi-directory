from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import videojobstatus_enum
from . import labeldetection
from . import videometadata


@dataclass_json
@dataclass
class GetLabelDetectionResponse:
    job_status: Optional[videojobstatus_enum.VideoJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    label_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelModelVersion' }})
    labels: Optional[List[labeldetection.LabelDetection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Labels' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    video_metadata: Optional[videometadata.VideoMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VideoMetadata' }})
    
