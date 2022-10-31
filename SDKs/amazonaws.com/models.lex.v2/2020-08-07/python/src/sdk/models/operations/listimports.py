from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListImportsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListImportsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListImportsRequestBodySortBy:
    attribute: Optional[shared.ImportSortAttributeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    order: Optional[shared.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    

@dataclass_json
@dataclass
class ListImportsRequestBody:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    filters: Optional[List[shared.ImportFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    sort_by: Optional[ListImportsRequestBodySortBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortBy' }})
    

@dataclass
class ListImportsRequest:
    query_params: ListImportsQueryParams = field(default=None)
    headers: ListImportsHeaders = field(default=None)
    request: ListImportsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListImportsResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_imports_response: Optional[shared.ListImportsResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
