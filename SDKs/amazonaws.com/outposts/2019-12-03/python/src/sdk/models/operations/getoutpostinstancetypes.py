from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetOutpostInstanceTypesPathParams:
    outpost_id: str = field(default=None, metadata={'path_param': { 'field_name': 'OutpostId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOutpostInstanceTypesQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOutpostInstanceTypesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOutpostInstanceTypesRequest:
    path_params: GetOutpostInstanceTypesPathParams = field(default=None)
    query_params: GetOutpostInstanceTypesQueryParams = field(default=None)
    headers: GetOutpostInstanceTypesHeaders = field(default=None)
    

@dataclass
class GetOutpostInstanceTypesResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_outpost_instance_types_output: Optional[shared.GetOutpostInstanceTypesOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
