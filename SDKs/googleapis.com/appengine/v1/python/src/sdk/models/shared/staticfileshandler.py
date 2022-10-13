from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StaticFilesHandler:
    application_readable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationReadable' }})
    expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    http_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpHeaders' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    require_matching_file: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requireMatchingFile' }})
    upload_path_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadPathRegex' }})
    
