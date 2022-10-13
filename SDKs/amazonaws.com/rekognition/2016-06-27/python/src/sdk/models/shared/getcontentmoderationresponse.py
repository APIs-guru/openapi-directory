from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import videojobstatus_enum
from . import contentmoderationdetection
from . import videometadata


@dataclass_json
@dataclass
class GetContentModerationResponse:
    job_status: Optional[videojobstatus_enum.VideoJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    moderation_labels: Optional[List[contentmoderationdetection.ContentModerationDetection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModerationLabels' }})
    moderation_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModerationModelVersion' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    video_metadata: Optional[videometadata.VideoMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VideoMetadata' }})
    
