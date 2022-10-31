from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateRuleGroupXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_CREATE_RULE_GROUP = "AWSWAF_20150824.CreateRuleGroup"


@dataclass
class CreateRuleGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateRuleGroupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRuleGroupRequest:
    headers: CreateRuleGroupHeaders = field(default=None)
    request: shared.CreateRuleGroupRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRuleGroupResponse:
    content_type: str = field(default=None)
    create_rule_group_response: Optional[shared.CreateRuleGroupResponse] = field(default=None)
    status_code: int = field(default=None)
    waf_bad_request_exception: Optional[Any] = field(default=None)
    waf_disallowed_name_exception: Optional[Any] = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_limits_exceeded_exception: Optional[Any] = field(default=None)
    waf_stale_data_exception: Optional[Any] = field(default=None)
    waf_tag_operation_exception: Optional[Any] = field(default=None)
    waf_tag_operation_internal_error_exception: Optional[Any] = field(default=None)
    
