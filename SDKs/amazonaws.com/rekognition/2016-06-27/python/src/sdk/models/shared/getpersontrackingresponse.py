from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import videojobstatus_enum
from . import persondetection
from . import videometadata


@dataclass_json
@dataclass
class GetPersonTrackingResponse:
    job_status: Optional[videojobstatus_enum.VideoJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    persons: Optional[List[persondetection.PersonDetection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Persons' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    video_metadata: Optional[videometadata.VideoMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VideoMetadata' }})
    
