from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateCustomFileFromUploadCreateCustomFileData:
    cache_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache_id') }})
    

@dataclass
class CreateCustomFileFromUploadSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class CreateCustomFileFromUploadCreateCustomFileResponseCustomFile:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateCustomFileFromUploadCreateCustomFileResponse:
    custom_file: CreateCustomFileFromUploadCreateCustomFileResponseCustomFile = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_file') }})
    status: CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateCustomFileFromUploadRequest:
    request: CreateCustomFileFromUploadCreateCustomFileData = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCustomFileFromUploadSecurity = field()
    

@dataclass
class CreateCustomFileFromUploadResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_custom_file_response: Optional[CreateCustomFileFromUploadCreateCustomFileResponse] = field(default=None)
    
