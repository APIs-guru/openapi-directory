from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetProxyHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_downstream_authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-downstream-authorization' }})
    x_apideck_downstream_url: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-downstream-url' }})
    x_apideck_service_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class GetProxySecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProxyRequest:
    headers: GetProxyHeaders = field(default=None)
    security: GetProxySecurity = field(default=None)
    

@dataclass
class GetProxyResponses:
    get_proxy_200_application_json_any: Optional[Any] = field(default=None)
    get_proxy_401_application_json_any: Optional[Any] = field(default=None)
    get_proxy_default_application_json_any: Optional[Any] = field(default=None)
    

@dataclass
class GetProxyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    responses: dict[int, dict[str, GetProxyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
