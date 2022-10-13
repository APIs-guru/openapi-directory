from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUUIDVersionVersionPathParams:
    version: int = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUUIDVersionVersionQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUUIDVersionVersionSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUUIDVersionVersionRequest:
    path_params: GetUUIDVersionVersionPathParams = field(default=None)
    query_params: GetUUIDVersionVersionQueryParams = field(default=None)
    security: GetUUIDVersionVersionSecurity = field(default=None)
    

@dataclass
class GetUUIDVersionVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
