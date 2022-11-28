from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DisconnectCustomKeyStoreXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_DISCONNECT_CUSTOM_KEY_STORE = "TrentService.DisconnectCustomKeyStore"


@dataclass
class DisconnectCustomKeyStoreHeaders:
    x_amz_target: DisconnectCustomKeyStoreXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisconnectCustomKeyStoreRequest:
    headers: DisconnectCustomKeyStoreHeaders = field()
    request: shared.DisconnectCustomKeyStoreRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisconnectCustomKeyStoreResponse:
    content_type: str = field()
    status_code: int = field()
    custom_key_store_invalid_state_exception: Optional[Any] = field(default=None)
    custom_key_store_not_found_exception: Optional[Any] = field(default=None)
    disconnect_custom_key_store_response: Optional[dict[str, Any]] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    
