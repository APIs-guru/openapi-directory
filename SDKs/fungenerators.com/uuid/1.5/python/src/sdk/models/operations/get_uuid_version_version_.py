from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUUIDVersionVersionPathParams:
    version: int = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUUIDVersionVersionQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUUIDVersionVersionSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUUIDVersionVersionRequest:
    path_params: GetUUIDVersionVersionPathParams = field()
    query_params: GetUUIDVersionVersionQueryParams = field()
    security: GetUUIDVersionVersionSecurity = field()
    

@dataclass
class GetUUIDVersionVersionResponse:
    content_type: str = field()
    status_code: int = field()
    
