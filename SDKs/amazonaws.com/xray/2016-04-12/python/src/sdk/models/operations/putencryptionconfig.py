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
class PutEncryptionConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class PutEncryptionConfigRequestBodyTypeEnum(str, Enum):
    NONE = "NONE"
    KMS = "KMS"


@dataclass_json
@dataclass
class PutEncryptionConfigRequestBody:
    type: PutEncryptionConfigRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    

@dataclass
class PutEncryptionConfigRequest:
    headers: PutEncryptionConfigHeaders = field()
    request: PutEncryptionConfigRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEncryptionConfigResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_request_exception: Optional[Any] = field(default=None)
    put_encryption_config_result: Optional[shared.PutEncryptionConfigResult] = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    
