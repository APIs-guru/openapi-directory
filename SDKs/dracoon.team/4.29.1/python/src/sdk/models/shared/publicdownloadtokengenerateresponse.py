from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PublicDownloadTokenGenerateResponse:
    r"""PublicDownloadTokenGenerateResponse
    Download URL
    """
    
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadUrl') }})
    
