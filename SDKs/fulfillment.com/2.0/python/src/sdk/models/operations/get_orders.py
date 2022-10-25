from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetOrdersQueryParams:
    from_date: str = field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    hydrate: Optional[List[shared.HydrateParamEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'hydrate', 'style': 'form', 'explode': False }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    merchant_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'merchantIds', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    to_date: str = field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    warehouse_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'warehouseIds', 'style': 'form', 'explode': False }})
    

@dataclass
class GetOrdersSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetOrdersRequest:
    query_params: GetOrdersQueryParams = field(default=None)
    security: GetOrdersSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetOrdersErrorStandardV2:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2:
    action_required_by: Optional[GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionRequiredBy' }})
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    detail_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailCode' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isClosed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    stage: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    state: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2:
    created_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails:
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lot_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lotNum' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    serial_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNum' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    external_sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalSku' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    total_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalQuantity' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData:
    declared_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declaredValue' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inventory_details: Optional[List[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryDetails' }})
    line_details: Optional[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineDetails' }})
    requested_sku_data: Optional[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedSkuData' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2MerchantV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso2' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2:
    address1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address_locality: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLocality' }})
    address_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressRegion' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso: Optional[GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2ParentOrder:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2:
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
class GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers:
    carrier: Optional[GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2WarehouseV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2:
    current_status: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentStatus' }})
    depart_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dispatch_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispatchDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    integrator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrator' }})
    line_items: Optional[List[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    merchant: GetOrders200ApplicationJSONOrderResponseV2MerchantV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant' }})
    merchant_order_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    merchant_shipping_method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantShippingMethod' }})
    original_consignee: GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalConsignee' }})
    parent_order: Optional[GetOrders200ApplicationJSONOrderResponseV2ParentOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentOrder' }})
    purchase_order_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseOrderNum' }})
    recorded_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tracking_numbers: Optional[List[GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingNumbers' }})
    validated_consignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validatedConsignee' }})
    warehouse: Optional[GetOrders200ApplicationJSONOrderResponseV2WarehouseV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warehouse' }})
    

@dataclass
class GetOrdersResponse:
    content_type: str = field(default=None)
    error_standard_v2: Optional[GetOrdersErrorStandardV2] = field(default=None)
    order_response_one_of_v2: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
