from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileUploadPartEntity:
    r"""FileUploadPartEntity
    Begin file upload
    """
    
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    ask_about_overwrites: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ask_about_overwrites') }})
    available_parts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_parts') }})
    expires: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires') }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    next_partsize: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_partsize') }})
    parallel_parts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallel_parts') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    part_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('part_number') }})
    partsize: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partsize') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    send: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('send') }})
    upload_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_uri') }})
    
