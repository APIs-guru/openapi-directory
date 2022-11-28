from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteXSSMatchSetXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_DELETE_XSS_MATCH_SET = "AWSWAF_Regional_20161128.DeleteXssMatchSet"


@dataclass
class DeleteXSSMatchSetHeaders:
    x_amz_target: DeleteXSSMatchSetXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteXSSMatchSetRequest:
    headers: DeleteXSSMatchSetHeaders = field()
    request: shared.DeleteXSSMatchSetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteXSSMatchSetResponse:
    content_type: str = field()
    status_code: int = field()
    delete_xss_match_set_response: Optional[shared.DeleteXSSMatchSetResponse] = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_invalid_account_exception: Optional[Any] = field(default=None)
    waf_non_empty_entity_exception: Optional[Any] = field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = field(default=None)
    waf_referenced_item_exception: Optional[Any] = field(default=None)
    waf_stale_data_exception: Optional[Any] = field(default=None)
    
