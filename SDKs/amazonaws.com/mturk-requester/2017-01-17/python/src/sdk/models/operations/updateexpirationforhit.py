from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateExpirationForHitxAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_EXPIRATION_FOR_HIT = "MTurkRequesterServiceV20170117.UpdateExpirationForHIT"


@dataclass
class UpdateExpirationForHitHeaders:
    x_amz_target: UpdateExpirationForHitxAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateExpirationForHitRequest:
    headers: UpdateExpirationForHitHeaders = field()
    request: shared.UpdateExpirationForHitRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateExpirationForHitResponse:
    content_type: str = field()
    status_code: int = field()
    request_error: Optional[Any] = field(default=None)
    service_fault: Optional[Any] = field(default=None)
    update_expiration_for_hit_response: Optional[dict[str, Any]] = field(default=None)
    
