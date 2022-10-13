from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateMobileDeviceAccessRuleXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_CREATE_MOBILE_DEVICE_ACCESS_RULE = "WorkMailService.CreateMobileDeviceAccessRule"


@dataclass
class CreateMobileDeviceAccessRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateMobileDeviceAccessRuleXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateMobileDeviceAccessRuleRequest:
    headers: CreateMobileDeviceAccessRuleHeaders = field(default=None)
    request: shared.CreateMobileDeviceAccessRuleRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMobileDeviceAccessRuleResponse:
    content_type: str = field(default=None)
    create_mobile_device_access_rule_response: Optional[shared.CreateMobileDeviceAccessRuleResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    organization_not_found_exception: Optional[Any] = field(default=None)
    organization_state_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
