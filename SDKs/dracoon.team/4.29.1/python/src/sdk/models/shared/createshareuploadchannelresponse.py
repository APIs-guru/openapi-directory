from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateShareUploadChannelResponse:
    r"""CreateShareUploadChannelResponse
    Upload channel information
    """
    
    upload_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadId') }})
    upload_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadUrl') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
