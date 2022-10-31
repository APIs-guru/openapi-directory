from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DescribeJobsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class DescribeJobsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DescribeJobsRequestBodyFilters:
    from_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromDate' }})
    job_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobIDs' }})
    to_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toDate' }})
    

@dataclass_json
@dataclass
class DescribeJobsRequestBody:
    filters: DescribeJobsRequestBodyFilters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    

@dataclass
class DescribeJobsRequest:
    query_params: DescribeJobsQueryParams = field(default=None)
    headers: DescribeJobsHeaders = field(default=None)
    request: DescribeJobsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeJobsResponse:
    content_type: str = field(default=None)
    describe_jobs_response: Optional[shared.DescribeJobsResponse] = field(default=None)
    status_code: int = field(default=None)
    uninitialized_account_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
