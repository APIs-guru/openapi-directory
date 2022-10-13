from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateFileUploadResponse:
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    upload_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadId' }})
    upload_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadUrl' }})
    
