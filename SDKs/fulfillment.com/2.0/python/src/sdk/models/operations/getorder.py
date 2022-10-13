from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetOrderPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrderQueryParams:
    hydrate: Optional[List[shared.HydrateParamEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'hydrate', 'style': 'form', 'explode': False }})
    merchant_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'merchantId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrderSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetOrderRequest:
    path_params: GetOrderPathParams = field(default=None)
    query_params: GetOrderQueryParams = field(default=None)
    security: GetOrderSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2CurrentStatusStatusActionRequiredBy:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2CurrentStatusStatusStage:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2CurrentStatusStatusState:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2CurrentStatusStatusStatusTypeV2:
    action_required_by: Optional[GetOrder200ApplicationJSON2CurrentStatusStatusActionRequiredBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionRequiredBy' }})
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    detail_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailCode' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isClosed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    stage: GetOrder200ApplicationJSON2CurrentStatusStatusStage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    state: GetOrder200ApplicationJSON2CurrentStatusStatusState = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2CurrentStatusStatusEventV2:
    created_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[GetOrder200ApplicationJSON2CurrentStatusStatusStatusTypeV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2LineItemsInventoryDetails:
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lot_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lotNum' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    serial_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNum' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2LineItemsLineDetails:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    external_sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalSku' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    total_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalQuantity' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2LineItemsRequestedSkuData:
    declared_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declaredValue' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2LineItemsLineItemsResponseV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inventory_details: Optional[List[GetOrder200ApplicationJSON2LineItemsInventoryDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryDetails' }})
    line_details: Optional[GetOrder200ApplicationJSON2LineItemsLineDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineDetails' }})
    requested_sku_data: Optional[GetOrder200ApplicationJSON2LineItemsRequestedSkuData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedSkuData' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2MerchantMerchantV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2OriginalConsigneeIsoIsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso2' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2OriginalConsigneeConsigneeV2:
    address1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address_locality: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLocality' }})
    address_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressRegion' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso: Optional[GetOrder200ApplicationJSON2OriginalConsigneeIsoIsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2ParentOrder:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2TrackingNumbersCarrierCarrierHydratedV2:
    can_reprint_postage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canReprintPostage' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    include_peripherals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includePeripherals' }})
    internal_rates_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalRatesOnly' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    requires_dimensions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiresDimensions' }})
    symbol: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbol' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2TrackingNumbers:
    carrier: Optional[GetOrder200ApplicationJSON2TrackingNumbersCarrierCarrierHydratedV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2WarehouseWarehouseV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetOrder200ApplicationJSON2:
    current_status: GetOrder200ApplicationJSON2CurrentStatusStatusEventV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentStatus' }})
    depart_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dispatch_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispatchDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    integrator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrator' }})
    line_items: Optional[List[GetOrder200ApplicationJSON2LineItemsLineItemsResponseV2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    merchant: GetOrder200ApplicationJSON2MerchantMerchantV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant' }})
    merchant_order_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    merchant_shipping_method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantShippingMethod' }})
    original_consignee: GetOrder200ApplicationJSON2OriginalConsigneeConsigneeV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalConsignee' }})
    parent_order: Optional[GetOrder200ApplicationJSON2ParentOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentOrder' }})
    purchase_order_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseOrderNum' }})
    recorded_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tracking_numbers: Optional[List[GetOrder200ApplicationJSON2TrackingNumbers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingNumbers' }})
    validated_consignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validatedConsignee' }})
    warehouse: Optional[GetOrder200ApplicationJSON2WarehouseWarehouseV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warehouse' }})
    

@dataclass
class GetOrderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    oneorders_get_responses_200_content_application_1json_schema: Optional[Any] = field(default=None)
    
