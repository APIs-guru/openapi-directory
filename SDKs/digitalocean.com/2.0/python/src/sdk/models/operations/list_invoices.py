from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ListInvoices200ApplicationJSONInvoices:
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    invoice_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_period' }})
    invoice_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_uuid' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    

@dataclass_json
@dataclass
class ListInvoices200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListInvoices200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListInvoices200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListInvoices200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListInvoices200ApplicationJSON:
    invoice_preview: Optional[shared.Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_preview' }})
    invoices: Optional[List[ListInvoices200ApplicationJSONInvoices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoices' }})
    links: Optional[ListInvoices200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListInvoices200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class ListInvoices401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListInvoicesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_invoices_200_application_json_object: Optional[ListInvoices200ApplicationJSON] = field(default=None)
    list_invoices_401_application_json_object: Optional[ListInvoices401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
