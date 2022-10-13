from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetAwsOrganizationsAccessStatusXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_GET_AWS_ORGANIZATIONS_ACCESS_STATUS = "AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus"


@dataclass
class GetAwsOrganizationsAccessStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetAwsOrganizationsAccessStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetAwsOrganizationsAccessStatusRequest:
    headers: GetAwsOrganizationsAccessStatusHeaders = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetAwsOrganizationsAccessStatusResponse:
    content_type: str = field(default=None)
    get_aws_organizations_access_status_output: Optional[shared.GetAwsOrganizationsAccessStatusOutput] = field(default=None)
    operation_not_supported_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
