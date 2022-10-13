from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import celebrityrecognition
from . import videojobstatus_enum
from . import videometadata


@dataclass_json
@dataclass
class GetCelebrityRecognitionResponse:
    celebrities: Optional[List[celebrityrecognition.CelebrityRecognition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Celebrities' }})
    job_status: Optional[videojobstatus_enum.VideoJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    video_metadata: Optional[videometadata.VideoMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VideoMetadata' }})
    
