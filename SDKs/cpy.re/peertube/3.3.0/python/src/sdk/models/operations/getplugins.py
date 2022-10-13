from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPluginsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    plugin_type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pluginType', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    uninstalled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'uninstalled', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPluginsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPluginsRequest:
    query_params: GetPluginsQueryParams = field(default=None)
    security: GetPluginsSecurity = field(default=None)
    

@dataclass
class GetPluginsResponse:
    content_type: str = field(default=None)
    plugin_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
