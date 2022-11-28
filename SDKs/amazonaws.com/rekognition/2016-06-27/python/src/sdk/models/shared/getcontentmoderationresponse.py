from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetContentModerationResponse:
    job_status: Optional[VideoJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    moderation_labels: Optional[List[ContentModerationDetection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModerationLabels') }})
    moderation_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModerationModelVersion') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    video_metadata: Optional[VideoMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VideoMetadata') }})
    
