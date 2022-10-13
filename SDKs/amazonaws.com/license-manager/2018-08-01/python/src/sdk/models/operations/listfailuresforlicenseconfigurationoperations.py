from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum(str, Enum):
    AWS_LICENSE_MANAGER_LIST_FAILURES_FOR_LICENSE_CONFIGURATION_OPERATIONS = "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations"


@dataclass
class ListFailuresForLicenseConfigurationOperationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListFailuresForLicenseConfigurationOperationsRequest:
    headers: ListFailuresForLicenseConfigurationOperationsHeaders = field(default=None)
    request: shared.ListFailuresForLicenseConfigurationOperationsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListFailuresForLicenseConfigurationOperationsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    authorization_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    list_failures_for_license_configuration_operations_response: Optional[shared.ListFailuresForLicenseConfigurationOperationsResponse] = field(default=None)
    rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
