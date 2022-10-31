from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListS3ResourcesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListS3ResourcesXAmzTargetEnum(str, Enum):
    MACIE_SERVICE_LIST_S3_RESOURCES = "MacieService.ListS3Resources"


@dataclass
class ListS3ResourcesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListS3ResourcesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListS3ResourcesRequest:
    query_params: ListS3ResourcesQueryParams = field(default=None)
    headers: ListS3ResourcesHeaders = field(default=None)
    request: shared.ListS3ResourcesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListS3ResourcesResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    list_s3_resources_result: Optional[shared.ListS3ResourcesResult] = field(default=None)
    status_code: int = field(default=None)
    
