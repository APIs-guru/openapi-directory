from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListPrincipalsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPrincipalsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class ListPrincipalsRequestBodyResourceOwnerEnum(str, Enum):
    SELF = "SELF"
    OTHER_ACCOUNTS = "OTHER-ACCOUNTS"


@dataclass_json
@dataclass
class ListPrincipalsRequestBody:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    principals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principals' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    resource_owner: ListPrincipalsRequestBodyResourceOwnerEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceOwner' }})
    resource_share_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareArns' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    

@dataclass
class ListPrincipalsRequest:
    query_params: ListPrincipalsQueryParams = field(default=None)
    headers: ListPrincipalsHeaders = field(default=None)
    request: ListPrincipalsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListPrincipalsResponse:
    content_type: str = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    list_principals_response: Optional[shared.ListPrincipalsResponse] = field(default=None)
    malformed_arn_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_exception: Optional[Any] = field(default=None)
    
