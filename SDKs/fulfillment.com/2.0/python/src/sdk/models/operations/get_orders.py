from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetOrdersQueryParams:
    from_date: str = field(metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    to_date: str = field(metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    hydrate: Optional[List[shared.HydrateParamEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'hydrate', 'style': 'form', 'explode': False }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    merchant_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'merchantIds', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    warehouse_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'warehouseIds', 'style': 'form', 'explode': False }})
    

@dataclass
class GetOrdersSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetOrdersErrorStandardV2:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy:
    r"""GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
    Responsibility for resolving this issue
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailCode') }})
    stage: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    state: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    action_required_by: Optional[GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionRequiredBy') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isClosed') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    created_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails:
    expiration_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lot_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lotNum') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    serial_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNum') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    external_sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalSku') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    total_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalQuantity') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData:
    declared_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('declaredValue') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inventory_details: Optional[List[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryDetails') }})
    line_details: Optional[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineDetails') }})
    requested_sku_data: Optional[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedSkuData') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2MerchantV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso2') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2:
    address1: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    address_locality: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLocality') }})
    address_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressRegion') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    postal_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    iso: Optional[GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2ParentOrder:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    symbol: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    can_reprint_postage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReprintPostage') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    include_peripherals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includePeripherals') }})
    internal_rates_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalRatesOnly') }})
    requires_dimensions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiresDimensions') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers:
    carrier: Optional[GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2WarehouseV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetOrders200ApplicationJSONOrderResponseV2:
    r"""GetOrders200ApplicationJSONOrderResponseV2
    Requires hydrate to be set in the request and the corresponding node will be filled.
    """
    
    current_status: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStatus') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    merchant: GetOrders200ApplicationJSONOrderResponseV2MerchantV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    merchant_order_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    merchant_shipping_method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantShippingMethod') }})
    original_consignee: GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalConsignee') }})
    recorded_on: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordedOn'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validated_consignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedConsignee') }})
    depart_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dispatch_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    integrator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrator') }})
    line_items: Optional[List[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    parent_order: Optional[GetOrders200ApplicationJSONOrderResponseV2ParentOrder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentOrder') }})
    purchase_order_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderNum') }})
    tracking_numbers: Optional[List[GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingNumbers') }})
    warehouse: Optional[GetOrders200ApplicationJSONOrderResponseV2WarehouseV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse') }})
    

@dataclass
class GetOrdersRequest:
    query_params: GetOrdersQueryParams = field()
    security: GetOrdersSecurity = field()
    

@dataclass
class GetOrdersResponse:
    content_type: str = field()
    status_code: int = field()
    error_standard_v2: Optional[GetOrdersErrorStandardV2] = field(default=None)
    order_response_one_of_v2: Optional[Any] = field(default=None)
    
