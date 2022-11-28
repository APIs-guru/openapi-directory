from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppDgetPathParams:
    app_d_id: str = field(metadata={'path_param': { 'field_name': 'appDId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppDgetQueryParams:
    all_fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'all_fields', 'style': 'form', 'explode': True }})
    exclude_default: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_default', 'style': 'form', 'explode': True }})
    exclude_fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_fields', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class AppDgetRequest:
    path_params: AppDgetPathParams = field()
    query_params: AppDgetQueryParams = field()
    

@dataclass
class AppDgetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
