from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ChecksCreatePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ChecksCreateRequestBodyActions:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
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
    annotation_level: ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation_level') }})
    end_line: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_line') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    start_line: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_line') }})
    end_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_column') }})
    raw_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_details') }})
    start_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_column') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class ChecksCreateRequestBodyOutputImages:
    alt: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alt') }})
    image_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    

@dataclass_json
@dataclass
class ChecksCreateRequestBodyOutput:
    r"""ChecksCreateRequestBodyOutput
    Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@2.22/rest/reference/checks#output-object) description.
    """
    
    summary: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    annotations: Optional[List[ChecksCreateRequestBodyOutputAnnotations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    images: Optional[List[ChecksCreateRequestBodyOutputImages]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
class ChecksCreateRequestBodyStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class ChecksCreateRequestBody:
    head_sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_sha') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    actions: Optional[List[ChecksCreateRequestBodyActions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    conclusion: Optional[ChecksCreateRequestBodyConclusionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusion') }})
    details_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details_url') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    output: Optional[ChecksCreateRequestBodyOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ChecksCreateRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class ChecksCreateRequest:
    path_params: ChecksCreatePathParams = field()
    request: Optional[ChecksCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChecksCreateResponse:
    content_type: str = field()
    status_code: int = field()
    check_run: Optional[shared.CheckRun] = field(default=None)
    
