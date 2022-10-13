from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetResourceSharesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetResourceSharesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class GetResourceSharesRequestBodyResourceOwnerEnum(str, Enum):
    SELF = "SELF"
    OTHER_ACCOUNTS = "OTHER-ACCOUNTS"

class GetResourceSharesRequestBodyResourceShareStatusEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DELETING = "DELETING"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class GetResourceSharesRequestBody:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    permission_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionArn' }})
    resource_owner: GetResourceSharesRequestBodyResourceOwnerEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceOwner' }})
    resource_share_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareArns' }})
    resource_share_status: Optional[GetResourceSharesRequestBodyResourceShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareStatus' }})
    tag_filters: Optional[List[shared.TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagFilters' }})
    

@dataclass
class GetResourceSharesRequest:
    query_params: GetResourceSharesQueryParams = field(default=None)
    headers: GetResourceSharesHeaders = field(default=None)
    request: GetResourceSharesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetResourceSharesResponse:
    content_type: str = field(default=None)
    get_resource_shares_response: Optional[shared.GetResourceSharesResponse] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    malformed_arn_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_exception: Optional[Any] = field(default=None)
    
