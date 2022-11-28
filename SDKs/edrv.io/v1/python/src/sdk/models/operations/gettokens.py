from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetTokensQueryParams:
    created_at_dollar_gte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAt[$gte]', 'style': 'form', 'explode': True }})
    created_at_dollar_lte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAt[$lte]', 'style': 'form', 'explode': True }})
    include_driver: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_driver', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    paginate_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'paginate_enabled', 'style': 'form', 'explode': True }})
    paginate_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'paginate_limit', 'style': 'form', 'explode': True }})
    paginate_page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'paginate_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.SortOrder1Enum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    updated_at_dollar_gte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAt[$gte]', 'style': 'form', 'explode': True }})
    updated_at_dollar_lte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAt[$lte]', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetTokens200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetTokensRequest:
    query_params: GetTokensQueryParams = field()
    

@dataclass
class GetTokensResponse:
    content_type: str = field()
    status_code: int = field()
    get_tokens_200_application_json_object: Optional[GetTokens200ApplicationJSON] = field(default=None)
    
