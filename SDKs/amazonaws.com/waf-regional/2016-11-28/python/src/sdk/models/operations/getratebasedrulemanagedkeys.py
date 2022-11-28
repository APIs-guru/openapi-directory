from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetRateBasedRuleManagedKeysXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_GET_RATE_BASED_RULE_MANAGED_KEYS = "AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys"


@dataclass
class GetRateBasedRuleManagedKeysHeaders:
    x_amz_target: GetRateBasedRuleManagedKeysXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRateBasedRuleManagedKeysRequest:
    headers: GetRateBasedRuleManagedKeysHeaders = field()
    request: shared.GetRateBasedRuleManagedKeysRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetRateBasedRuleManagedKeysResponse:
    content_type: str = field()
    status_code: int = field()
    get_rate_based_rule_managed_keys_response: Optional[shared.GetRateBasedRuleManagedKeysResponse] = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_invalid_account_exception: Optional[Any] = field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = field(default=None)
    
