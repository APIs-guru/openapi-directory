from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetPresignURLSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class GetPresignURLUploadPresignFields:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    x_amz_algorithm: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('x-amz-algorithm') }})
    x_amz_credential: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('x-amz-credential') }})
    x_amz_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('x-amz-date') }})
    x_amz_signature: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('x-amz-signature') }})
    
class GetPresignURLUploadPresignMethodEnum(str, Enum):
    POST = "post"


@dataclass_json
@dataclass
class GetPresignURLUploadPresign:
    fields: GetPresignURLUploadPresignFields = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    headers: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    method: Optional[GetPresignURLUploadPresignMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    

@dataclass
class GetPresignURLRequest:
    security: GetPresignURLSecurity = field()
    

@dataclass
class GetPresignURLResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    upload_presign: Optional[GetPresignURLUploadPresign] = field(default=None)
    
