from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteRuleXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_DELETE_RULE = "AWSWAF_Regional_20161128.DeleteRule"


@dataclass
class DeleteRuleHeaders:
    x_amz_target: DeleteRuleXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRuleRequest:
    headers: DeleteRuleHeaders = field()
    request: shared.DeleteRuleRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteRuleResponse:
    content_type: str = field()
    status_code: int = field()
    delete_rule_response: Optional[shared.DeleteRuleResponse] = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_invalid_account_exception: Optional[Any] = field(default=None)
    waf_non_empty_entity_exception: Optional[Any] = field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = field(default=None)
    waf_referenced_item_exception: Optional[Any] = field(default=None)
    waf_stale_data_exception: Optional[Any] = field(default=None)
    waf_tag_operation_exception: Optional[Any] = field(default=None)
    waf_tag_operation_internal_error_exception: Optional[Any] = field(default=None)
    
