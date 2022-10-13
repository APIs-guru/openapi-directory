from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errorresponse


@dataclass_json
@dataclass
class S3ShareUploadStatus:
    error_details: Optional[errorresponse.ErrorResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDetails' }})
    file_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
