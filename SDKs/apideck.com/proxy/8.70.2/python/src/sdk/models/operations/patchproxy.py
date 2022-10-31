from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PatchProxyHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    x_apideck_downstream_authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-downstream-authorization', 'style': 'simple', 'explode': False }})
    x_apideck_downstream_url: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-downstream-url', 'style': 'simple', 'explode': False }})
    x_apideck_service_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchProxySecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PatchProxyRequest:
    headers: PatchProxyHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': '*/*' }})
    security: PatchProxySecurity = field(default=None)
    

@dataclass_json
@dataclass
class PatchProxy401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    status_code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type_name' }})
    

@dataclass
class PatchProxyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    patch_proxy_200_application_json_any: Optional[Any] = field(default=None)
    patch_proxy_401_application_json_object: Optional[PatchProxy401ApplicationJSON] = field(default=None)
    patch_proxy_default_application_json_any: Optional[Any] = field(default=None)
    
