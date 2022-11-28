from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1GenerateUploadURLResponse:
    r"""GoogleCloudApigeeV1GenerateUploadURLResponse
    Response for GenerateUploadUrl method.
    """
    
    upload_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadUri') }})
    
