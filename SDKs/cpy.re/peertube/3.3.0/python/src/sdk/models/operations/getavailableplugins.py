from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAvailablePluginsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    current_peer_tube_engine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currentPeerTubeEngine', 'style': 'form', 'explode': True }})
    plugin_type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pluginType', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAvailablePluginsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAvailablePluginsRequest:
    query_params: GetAvailablePluginsQueryParams = field(default=None)
    security: GetAvailablePluginsSecurity = field(default=None)
    

@dataclass
class GetAvailablePluginsResponse:
    content_type: str = field(default=None)
    plugin_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
