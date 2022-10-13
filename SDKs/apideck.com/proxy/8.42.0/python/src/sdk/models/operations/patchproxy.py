from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PatchProxyHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_downstream_authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-downstream-authorization' }})
    x_apideck_downstream_url: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-downstream-url' }})
    x_apideck_service_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class PatchProxySecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PatchProxyRequest:
    headers: PatchProxyHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': '*/*' }})
    security: PatchProxySecurity = field(default=None)
    

@dataclass
class PatchProxyResponses:
    patch_proxy_200_application_json_any: Optional[Any] = field(default=None)
    patch_proxy_401_application_json_any: Optional[Any] = field(default=None)
    patch_proxy_default_application_json_any: Optional[Any] = field(default=None)
    

@dataclass
class PatchProxyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    responses: dict[int, dict[str, PatchProxyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
