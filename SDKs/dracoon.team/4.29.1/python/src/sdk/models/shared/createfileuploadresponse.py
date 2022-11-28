from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateFileUploadResponse:
    r"""CreateFileUploadResponse
    Upload channel information
    """
    
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    upload_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadId') }})
    upload_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadUrl') }})
    
