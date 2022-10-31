from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DescribeProjectQueryParams:
    project_id: str = field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    sync_from_resources: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'syncFromResources', 'style': 'form', 'explode': True }})
    

@dataclass
class DescribeProjectHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeProjectRequest:
    query_params: DescribeProjectQueryParams = field(default=None)
    headers: DescribeProjectHeaders = field(default=None)
    

@dataclass
class DescribeProjectResponse:
    bad_request_exception: Optional[shared.BadRequestException] = field(default=None)
    content_type: str = field(default=None)
    describe_project_result: Optional[shared.DescribeProjectResult] = field(default=None)
    internal_failure_exception: Optional[shared.InternalFailureException] = field(default=None)
    not_found_exception: Optional[shared.NotFoundException] = field(default=None)
    service_unavailable_exception: Optional[shared.ServiceUnavailableException] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[shared.TooManyRequestsException] = field(default=None)
    unauthorized_exception: Optional[shared.UnauthorizedException] = field(default=None)
    
