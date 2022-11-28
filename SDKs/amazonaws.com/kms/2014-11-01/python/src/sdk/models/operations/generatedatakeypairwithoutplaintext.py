from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT = "TrentService.GenerateDataKeyPairWithoutPlaintext"


@dataclass
class GenerateDataKeyPairWithoutPlaintextHeaders:
    x_amz_target: GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenerateDataKeyPairWithoutPlaintextRequest:
    headers: GenerateDataKeyPairWithoutPlaintextHeaders = field()
    request: shared.GenerateDataKeyPairWithoutPlaintextRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateDataKeyPairWithoutPlaintextResponse:
    content_type: str = field()
    status_code: int = field()
    dependency_timeout_exception: Optional[Any] = field(default=None)
    disabled_exception: Optional[Any] = field(default=None)
    generate_data_key_pair_without_plaintext_response: Optional[shared.GenerateDataKeyPairWithoutPlaintextResponse] = field(default=None)
    invalid_grant_token_exception: Optional[Any] = field(default=None)
    invalid_key_usage_exception: Optional[Any] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    kms_invalid_state_exception: Optional[Any] = field(default=None)
    key_unavailable_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
