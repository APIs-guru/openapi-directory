from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GistsListPublicQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class GistsListPublicRequest:
    query_params: GistsListPublicQueryParams = field()
    

@dataclass
class GistsListPublicResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    base_gists: Optional[List[shared.BaseGist]] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
