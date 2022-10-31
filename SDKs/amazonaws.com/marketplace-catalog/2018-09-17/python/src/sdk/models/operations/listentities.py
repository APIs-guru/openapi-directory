from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListEntitiesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEntitiesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListEntitiesRequestBodySort:
    sort_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[shared.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    

@dataclass_json
@dataclass
class ListEntitiesRequestBody:
    catalog: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Catalog' }})
    entity_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityType' }})
    filter_list: Optional[List[shared.Filter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterList' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort: Optional[ListEntitiesRequestBodySort] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sort' }})
    

@dataclass
class ListEntitiesRequest:
    query_params: ListEntitiesQueryParams = field(default=None)
    headers: ListEntitiesHeaders = field(default=None)
    request: ListEntitiesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListEntitiesResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    list_entities_response: Optional[shared.ListEntitiesResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
