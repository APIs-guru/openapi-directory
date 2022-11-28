from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GenerateRandomXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_GENERATE_RANDOM = "TrentService.GenerateRandom"


@dataclass
class GenerateRandomHeaders:
    x_amz_target: GenerateRandomXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenerateRandomRequest:
    headers: GenerateRandomHeaders = field()
    request: shared.GenerateRandomRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateRandomResponse:
    content_type: str = field()
    status_code: int = field()
    custom_key_store_invalid_state_exception: Optional[Any] = field(default=None)
    custom_key_store_not_found_exception: Optional[Any] = field(default=None)
    dependency_timeout_exception: Optional[Any] = field(default=None)
    generate_random_response: Optional[shared.GenerateRandomResponse] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    
