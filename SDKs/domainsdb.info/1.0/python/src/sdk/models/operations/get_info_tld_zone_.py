from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetInfoTldZonePathParams:
    zone: str = field(default=None, metadata={'path_param': { 'field_name': 'zone', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInfoTldZoneQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInfoTldZoneRequest:
    path_params: GetInfoTldZonePathParams = field(default=None)
    query_params: GetInfoTldZoneQueryParams = field(default=None)
    

@dataclass
class GetInfoTldZoneResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    zone_info: Optional[shared.ZoneInfo] = field(default=None)
    
