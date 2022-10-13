from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetInvoiceByUUIDPathParams:
    invoice_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'invoice_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceByUUIDRequest:
    path_params: GetInvoiceByUUIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetInvoiceByUUID200ApplicationJSONInvoiceItems:
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    duration_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration_unit' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time' }})
    group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_description' }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    project_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_name' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_id' }})
    resource_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_uuid' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    

@dataclass_json
@dataclass
class GetInvoiceByUUID200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class GetInvoiceByUUID200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class GetInvoiceByUUID200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class GetInvoiceByUUID200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class GetInvoiceByUUID200ApplicationJSON:
    invoice_items: Optional[List[GetInvoiceByUUID200ApplicationJSONInvoiceItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_items' }})
    links: Optional[GetInvoiceByUUID200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: GetInvoiceByUUID200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class GetInvoiceByUUID401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetInvoiceByUUIDResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_invoice_by_uuid_200_application_json_object: Optional[GetInvoiceByUUID200ApplicationJSON] = field(default=None)
    get_invoice_by_uuid_401_application_json_object: Optional[GetInvoiceByUUID401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
