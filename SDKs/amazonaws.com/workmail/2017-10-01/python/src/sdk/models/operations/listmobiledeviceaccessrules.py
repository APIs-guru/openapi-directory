from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListMobileDeviceAccessRulesXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_LIST_MOBILE_DEVICE_ACCESS_RULES = "WorkMailService.ListMobileDeviceAccessRules"


@dataclass
class ListMobileDeviceAccessRulesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListMobileDeviceAccessRulesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMobileDeviceAccessRulesRequest:
    headers: ListMobileDeviceAccessRulesHeaders = field(default=None)
    request: shared.ListMobileDeviceAccessRulesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListMobileDeviceAccessRulesResponse:
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    list_mobile_device_access_rules_response: Optional[shared.ListMobileDeviceAccessRulesResponse] = field(default=None)
    organization_not_found_exception: Optional[Any] = field(default=None)
    organization_state_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
