from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateCustomFileFromUploadCreateCustomFileData:
    cache_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache_id' }})
    

@dataclass
class CreateCustomFileFromUploadSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCustomFileFromUploadRequest:
    request: CreateCustomFileFromUploadCreateCustomFileData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCustomFileFromUploadSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateCustomFileFromUploadCreateCustomFileResponseCustomFile:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateCustomFileFromUploadCreateCustomFileResponse:
    custom_file: CreateCustomFileFromUploadCreateCustomFileResponseCustomFile = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_file' }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class CreateCustomFileFromUploadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_custom_file_response: Optional[CreateCustomFileFromUploadCreateCustomFileResponse] = field(default=None)
    
