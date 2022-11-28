from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppPkgIDGetPathParams:
    app_pkg_id: str = field(metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppPkgIDGetQueryParams:
    all_fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'all_fields', 'style': 'form', 'explode': True }})
    exclude_default: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_default', 'style': 'form', 'explode': True }})
    exclude_fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_fields', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class AppPkgIDGetRequest:
    path_params: AppPkgIDGetPathParams = field()
    query_params: AppPkgIDGetQueryParams = field()
    

@dataclass
class AppPkgIDGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
