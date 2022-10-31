from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListUsageForLicenseConfigurationXAmzTargetEnum(str, Enum):
    AWS_LICENSE_MANAGER_LIST_USAGE_FOR_LICENSE_CONFIGURATION = "AWSLicenseManager.ListUsageForLicenseConfiguration"


@dataclass
class ListUsageForLicenseConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListUsageForLicenseConfigurationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUsageForLicenseConfigurationRequest:
    headers: ListUsageForLicenseConfigurationHeaders = field(default=None)
    request: shared.ListUsageForLicenseConfigurationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListUsageForLicenseConfigurationResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    authorization_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    filter_limit_exceeded_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    list_usage_for_license_configuration_response: Optional[shared.ListUsageForLicenseConfigurationResponse] = field(default=None)
    rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
