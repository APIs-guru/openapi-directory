from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OptionsProxyHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    x_apideck_downstream_url: str = field(metadata={'header': { 'field_name': 'x-apideck-downstream-url', 'style': 'simple', 'explode': False }})
    x_apideck_service_id: str = field(metadata={'header': { 'field_name': 'x-apideck-service-id', 'style': 'simple', 'explode': False }})
    x_apideck_downstream_authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-downstream-authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsProxySecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class OptionsProxy401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    status_code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type_name') }})
    

@dataclass
class OptionsProxyRequest:
    headers: OptionsProxyHeaders = field()
    security: OptionsProxySecurity = field()
    

@dataclass
class OptionsProxyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    options_proxy_200_application_json_any: Optional[Any] = field(default=None)
    options_proxy_401_application_json_object: Optional[OptionsProxy401ApplicationJSON] = field(default=None)
    options_proxy_default_application_json_any: Optional[Any] = field(default=None)
    
