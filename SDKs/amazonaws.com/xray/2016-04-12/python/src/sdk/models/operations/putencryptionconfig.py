from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
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
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    type: PutEncryptionConfigRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass
class PutEncryptionConfigRequest:
    headers: PutEncryptionConfigHeaders = field(default=None)
    request: PutEncryptionConfigRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEncryptionConfigResponse:
    content_type: str = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    put_encryption_config_result: Optional[shared.PutEncryptionConfigResult] = field(default=None)
    status_code: int = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    
