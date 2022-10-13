from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetContentproSearchQueryParams:
    terms: str = field(default=None, metadata={'query_param': { 'field_name': 'terms', 'style': 'form', 'explode': True }})
    

@dataclass
class GetContentproSearchRequest:
    query_params: GetContentproSearchQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetContentproSearch200ApplicationJSONData:
    article: Optional[shared.Article] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'article' }})
    company: Optional[shared.ContentProCompany] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    snippets: Optional[shared.ContentProSnippets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippets' }})
    

@dataclass_json
@dataclass
class GetContentproSearch200ApplicationJSON:
    calls_per_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calls_per_month' }})
    count_remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count_remaining' }})
    data: Optional[List[GetContentproSearch200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    renewal_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewal_date' }})
    

@dataclass
class GetContentproSearchResponse:
    content_type: str = field(default=None)
    get_contentpro_search_200_application_json_object: Optional[GetContentproSearch200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
