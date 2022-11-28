from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetChangeTokenStatusXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_GET_CHANGE_TOKEN_STATUS = "AWSWAF_Regional_20161128.GetChangeTokenStatus"


@dataclass
class GetChangeTokenStatusHeaders:
    x_amz_target: GetChangeTokenStatusXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChangeTokenStatusRequest:
    headers: GetChangeTokenStatusHeaders = field()
    request: shared.GetChangeTokenStatusRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetChangeTokenStatusResponse:
    content_type: str = field()
    status_code: int = field()
    get_change_token_status_response: Optional[shared.GetChangeTokenStatusResponse] = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = field(default=None)
    
