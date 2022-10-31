from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListActivatedRulesInRuleGroupXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_LIST_ACTIVATED_RULES_IN_RULE_GROUP = "AWSWAF_20150824.ListActivatedRulesInRuleGroup"


@dataclass
class ListActivatedRulesInRuleGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListActivatedRulesInRuleGroupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListActivatedRulesInRuleGroupRequest:
    headers: ListActivatedRulesInRuleGroupHeaders = field(default=None)
    request: shared.ListActivatedRulesInRuleGroupRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListActivatedRulesInRuleGroupResponse:
    content_type: str = field(default=None)
    list_activated_rules_in_rule_group_response: Optional[shared.ListActivatedRulesInRuleGroupResponse] = field(default=None)
    status_code: int = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = field(default=None)
    
