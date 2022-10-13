from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DisablePolicyTypeXAmzTargetEnum(str, Enum):
    AWS_ORGANIZATIONS_V20161128_DISABLE_POLICY_TYPE = "AWSOrganizationsV20161128.DisablePolicyType"


@dataclass
class DisablePolicyTypeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DisablePolicyTypeXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DisablePolicyTypeRequest:
    headers: DisablePolicyTypeHeaders = field(default=None)
    request: shared.DisablePolicyTypeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisablePolicyTypeResponse:
    aws_organizations_not_in_use_exception: Optional[Any] = field(default=None)
    access_denied_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    constraint_violation_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    disable_policy_type_response: Optional[shared.DisablePolicyTypeResponse] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    policy_changes_in_progress_exception: Optional[Any] = field(default=None)
    policy_type_not_enabled_exception: Optional[Any] = field(default=None)
    root_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unsupported_api_endpoint_exception: Optional[Any] = field(default=None)
    
