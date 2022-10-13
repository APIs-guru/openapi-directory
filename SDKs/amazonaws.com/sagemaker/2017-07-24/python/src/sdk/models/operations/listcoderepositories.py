from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ListCodeRepositoriesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListCodeRepositoriesXAmzTargetEnum(str, Enum):
    SAGE_MAKER_LIST_CODE_REPOSITORIES = "SageMaker.ListCodeRepositories"


@dataclass
class ListCodeRepositoriesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListCodeRepositoriesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListCodeRepositoriesRequest:
    query_params: ListCodeRepositoriesQueryParams = field(default=None)
    headers: ListCodeRepositoriesHeaders = field(default=None)
    request: shared.ListCodeRepositoriesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListCodeRepositoriesResponse:
    content_type: str = field(default=None)
    list_code_repositories_output: Optional[shared.ListCodeRepositoriesOutput] = field(default=None)
    status_code: int = field(default=None)
    
