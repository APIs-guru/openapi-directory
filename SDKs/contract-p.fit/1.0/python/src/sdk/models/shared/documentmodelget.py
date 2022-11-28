from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentModelGet:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inbox: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbox') }})
    original_filename: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_filename') }})
    page_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_count') }})
    escalate: Optional[StateModelGet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('escalate') }})
    feedback: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    files: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    flag_for_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flag_for_review') }})
    last_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_version') }})
    lock: Optional[StateModelGet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lock') }})
    meta_information: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta_information') }})
    prediction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prediction') }})
    reject: Optional[StateModelGet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reject') }})
    status_data: Optional[StatusDataModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_data') }})
    submitted: Optional[StateModelGet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitted') }})
    timings: Optional[TimingsModelGet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timings') }})
    usage_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_data') }})
    versions: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
