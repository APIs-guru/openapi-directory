from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ChecksCreatePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ChecksCreateRequestBodyActions:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    
class ChecksCreateRequestBodyConclusionEnum(str, Enum):
    ACTION_REQUIRED = "action_required"
    CANCELLED = "cancelled"
    FAILURE = "failure"
    NEUTRAL = "neutral"
    SUCCESS = "success"
    SKIPPED = "skipped"
    STALE = "stale"
    TIMED_OUT = "timed_out"

class ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum(str, Enum):
    NOTICE = "notice"
    WARNING = "warning"
    FAILURE = "failure"


@dataclass_json
@dataclass
class ChecksCreateRequestBodyOutputAnnotations:
    annotation_level: ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotation_level' }})
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
class ChecksCreateRequestBodyOutputImages:
    alt: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alt' }})
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    image_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    

@dataclass_json
@dataclass
class ChecksCreateRequestBodyOutput:
    annotations: Optional[List[ChecksCreateRequestBodyOutputAnnotations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    images: Optional[List[ChecksCreateRequestBodyOutputImages]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    summary: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class ChecksCreateRequestBodyStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class ChecksCreateRequestBody:
    actions: Optional[List[ChecksCreateRequestBodyActions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    completed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_at' }})
    conclusion: Optional[ChecksCreateRequestBodyConclusionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conclusion' }})
    details_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details_url' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_id' }})
    head_sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_sha' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output: Optional[ChecksCreateRequestBodyOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    started_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started_at' }})
    status: Optional[ChecksCreateRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class ChecksCreateRequest:
    path_params: ChecksCreatePathParams = field(default=None)
    request: Optional[ChecksCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChecksCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    check_run: Optional[shared.CheckRun] = field(default=None)
    
