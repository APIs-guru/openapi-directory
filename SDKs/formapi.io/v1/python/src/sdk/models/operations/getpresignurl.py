from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPresignURLSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPresignURLRequest:
    security: GetPresignURLSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetPresignURLUploadPresignFields:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    x_amz_algorithm: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x-amz-algorithm' }})
    x_amz_credential: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x-amz-credential' }})
    x_amz_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x-amz-date' }})
    x_amz_signature: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x-amz-signature' }})
    
class GetPresignURLUploadPresignMethodEnum(str, Enum):
    POST = "post"


@dataclass_json
@dataclass
class GetPresignURLUploadPresign:
    fields: GetPresignURLUploadPresignFields = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    headers: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    method: Optional[GetPresignURLUploadPresignMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class GetPresignURLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    upload_presign: Optional[GetPresignURLUploadPresign] = field(default=None)
    
