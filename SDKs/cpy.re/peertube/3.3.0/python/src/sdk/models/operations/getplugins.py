from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPluginsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    plugin_type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pluginType', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    uninstalled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'uninstalled', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPluginsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPluginsRequest:
    query_params: GetPluginsQueryParams = field()
    security: GetPluginsSecurity = field()
    

@dataclass
class GetPluginsResponse:
    content_type: str = field()
    status_code: int = field()
    plugin_response: Optional[Any] = field(default=None)
    
