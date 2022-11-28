from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AppPackagesGetQueryParams:
    all_fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'all_fields', 'style': 'form', 'explode': True }})
    exclude_default: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_default', 'style': 'form', 'explode': True }})
    exclude_fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_fields', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class AppPackagesGetRequest:
    query_params: AppPackagesGetQueryParams = field()
    

@dataclass
class AppPackagesGetResponse:
    content_type: str = field()
    status_code: int = field()
    app_pkg_infos: Optional[List[shared.AppPkgInfo]] = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
