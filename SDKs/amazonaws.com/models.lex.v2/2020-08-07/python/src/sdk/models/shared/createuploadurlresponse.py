from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateUploadURLResponse:
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importId' }})
    upload_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadUrl' }})
    
