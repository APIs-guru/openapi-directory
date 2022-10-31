from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListAwsServiceAccessForOrganizationQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListAwsServiceAccessForOrganizationXAmzTargetEnum(str, Enum):
    AWS_ORGANIZATIONS_V20161128_LIST_AWS_SERVICE_ACCESS_FOR_ORGANIZATION = "AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization"


@dataclass
class ListAwsServiceAccessForOrganizationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListAwsServiceAccessForOrganizationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAwsServiceAccessForOrganizationRequest:
    query_params: ListAwsServiceAccessForOrganizationQueryParams = field(default=None)
    headers: ListAwsServiceAccessForOrganizationHeaders = field(default=None)
    request: shared.ListAwsServiceAccessForOrganizationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListAwsServiceAccessForOrganizationResponse:
    aws_organizations_not_in_use_exception: Optional[Any] = field(default=None)
    access_denied_exception: Optional[Any] = field(default=None)
    constraint_violation_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    list_aws_service_access_for_organization_response: Optional[shared.ListAwsServiceAccessForOrganizationResponse] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unsupported_api_endpoint_exception: Optional[Any] = field(default=None)
    
