from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGetSuggestedFollowsAllQueryParams:
    in_onboarding: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'in_onboarding', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetSuggestedFollowsAllRequest:
    query_params: GetGetSuggestedFollowsAllQueryParams = field(default=None)
    

@dataclass
class GetGetSuggestedFollowsAllResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
