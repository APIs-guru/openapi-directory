from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errorresponse
from . import node


@dataclass_json
@dataclass
class S3FileUploadStatus:
    error_details: Optional[errorresponse.ErrorResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDetails' }})
    node: Optional[node.Node] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
