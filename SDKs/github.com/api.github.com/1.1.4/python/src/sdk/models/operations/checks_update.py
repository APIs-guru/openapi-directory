from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ChecksUpdatePathParams:
    check_run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'check_run_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ChecksUpdateRequestBodyActions:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    
class ChecksUpdateRequestBodyConclusionEnum(str, Enum):
    ACTION_REQUIRED = "action_required"
    CANCELLED = "cancelled"
    FAILURE = "failure"
    NEUTRAL = "neutral"
    SUCCESS = "success"
    SKIPPED = "skipped"
    STALE = "stale"
    TIMED_OUT = "timed_out"

class ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum(str, Enum):
    NOTICE = "notice"
    WARNING = "warning"
    FAILURE = "failure"


@dataclass_json
@dataclass
class ChecksUpdateRequestBodyOutputAnnotations:
    annotation_level: ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotation_level' }})
    end_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_column' }})
    end_line: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_line' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    raw_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw_details' }})
    start_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_column' }})
    start_line: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_line' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class ChecksUpdateRequestBodyOutputImages:
    alt: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alt' }})
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    image_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    

@dataclass_json
@dataclass
class ChecksUpdateRequestBodyOutput:
    annotations: Optional[List[ChecksUpdateRequestBodyOutputAnnotations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    images: Optional[List[ChecksUpdateRequestBodyOutputImages]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    summary: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class ChecksUpdateRequestBodyStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class ChecksUpdateRequestBody:
    actions: Optional[List[ChecksUpdateRequestBodyActions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    completed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_at' }})
    conclusion: Optional[ChecksUpdateRequestBodyConclusionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conclusion' }})
    details_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details_url' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output: Optional[ChecksUpdateRequestBodyOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    started_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started_at' }})
    status: Optional[ChecksUpdateRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class ChecksUpdateRequest:
    path_params: ChecksUpdatePathParams = field(default=None)
    request: Optional[ChecksUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChecksUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    check_run: Optional[shared.CheckRun] = field(default=None)
    
