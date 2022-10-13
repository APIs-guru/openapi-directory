from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetInvoiceSummaryByUUIDPathParams:
    invoice_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'invoice_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceSummaryByUUIDRequest:
    path_params: GetInvoiceSummaryByUUIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONCreditsAndAdjustments:
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONOverages:
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONProductChargesItems:
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONProductCharges:
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    items: Optional[List[GetInvoiceSummaryByUUID200ApplicationJSONProductChargesItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONTaxes:
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONUserBillingAddress:
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_line1' }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_line2' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country_iso2_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_iso2_code' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    

@dataclass_json
@dataclass
class GetInvoiceSummaryByUUID200ApplicationJSON:
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    billing_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_period' }})
    credits_and_adjustments: Optional[GetInvoiceSummaryByUUID200ApplicationJSONCreditsAndAdjustments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credits_and_adjustments' }})
    invoice_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_uuid' }})
    overages: Optional[GetInvoiceSummaryByUUID200ApplicationJSONOverages] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overages' }})
    product_charges: Optional[GetInvoiceSummaryByUUID200ApplicationJSONProductCharges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_charges' }})
    taxes: Optional[GetInvoiceSummaryByUUID200ApplicationJSONTaxes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes' }})
    user_billing_address: Optional[GetInvoiceSummaryByUUID200ApplicationJSONUserBillingAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_billing_address' }})
    user_company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_company' }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_email' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_name' }})
    

@dataclass_json
@dataclass
class GetInvoiceSummaryByUUID401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetInvoiceSummaryByUUIDResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_invoice_summary_by_uuid_200_application_json_object: Optional[GetInvoiceSummaryByUUID200ApplicationJSON] = field(default=None)
    get_invoice_summary_by_uuid_401_application_json_object: Optional[GetInvoiceSummaryByUUID401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
