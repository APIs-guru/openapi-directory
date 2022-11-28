from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateUploadURLResponse:
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importId') }})
    upload_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadUrl') }})
    
