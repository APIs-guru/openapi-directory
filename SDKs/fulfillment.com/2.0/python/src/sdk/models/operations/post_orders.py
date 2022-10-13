from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class PostOrdersRequestBodyIntegratorEnum(str, Enum):
    ONE_SHOPPING_CART = "1ShoppingCart"
    THREED_CART = "3dCart"
    ADOBE_BC = "AdobeBC"
    AMAZON_AU = "AmazonAU"
    AMAZON_EU = "AmazonEU"
    AMAZON_NA = "AmazonNA"
    BIG_COMMERCE = "BigCommerce"
    BRAND_BOOM = "BrandBoom"
    BRIGHT_PEARL = "BrightPearl"
    BUY_GOODS = "BuyGoods"
    CELERY = "Celery"
    CHANNEL_ADVISOR = "ChannelAdvisor"
    CLICKBANK = "Clickbank"
    COMMERCE_HUB = "CommerceHub"
    CUSTOM = "Custom"
    DEMANDWARE = "Demandware"
    EBAY = "Ebay"
    ECWID = "Ecwid"
    ETSY = "Etsy"
    FOXY_CART = "FoxyCart"
    GOODSIE = "Goodsie"
    INFUSIONSOFT = "Infusionsoft"
    KONNEKTIVE = "Konnektive"
    LIME_LIGHT = "LimeLight"
    LINIO = "Linio"
    LINNWORKS = "Linnworks"
    MAGENTO = "Magento"
    NETSUITE = "Netsuite"
    NEW_EGG = "NewEgg"
    NEXTERNAL = "Nexternal"
    NU_ORDER = "NuOrder"
    OPENCART = "Opencart"
    ORDER_WAVE = "OrderWave"
    OS_COMMERCE1 = "osCommerce1"
    OVERSTOCK = "Overstock"
    PAY_PAL = "PayPal"
    PRESTA_SHOP = "PrestaShop"
    PRICEFALLS = "Pricefalls"
    QUICKBOOKS = "Quickbooks"
    RAKUTEN = "Rakuten"
    SEARS = "Sears"
    SELLBRITE = "Sellbrite"
    SELLER_CLOUD = "SellerCloud"
    SHIPSTATION = "Shipstation"
    SHOPIFY = "Shopify"
    SKUBANA = "Skubana"
    SOLID_COMMERCE = "SolidCommerce"
    SPARK_PAY = "SparkPay"
    SPREE_COMMERCE = "SpreeCommerce"
    SPS_COMMERCE = "spsCommerce"
    STITCH_LABS = "StitchLabs"
    STONE_EDGE = "StoneEdge"
    TRADE_GECKO = "TradeGecko"
    ULTRA_CART = "UltraCart"
    VOLUSION = "Volusion"
    VTEX = "VTEX"
    WALMART = "Walmart"
    WOO_COMMERCE = "WooCommerce"
    YAHOO = "Yahoo"


@dataclass_json
@dataclass
class PostOrdersRequestBodyItems:
    declared_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declaredValue' }})
    quantity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    sku: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass_json
@dataclass
class PostOrdersRequestBodyRecipientConsigneeNewV2:
    address1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address_locality: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLocality' }})
    address_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressRegion' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    phone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    

@dataclass_json
@dataclass
class PostOrdersRequestBodyWarehouse:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostOrdersRequestBodyOrderRequestV2:
    integrator: Optional[PostOrdersRequestBodyIntegratorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrator' }})
    items: List[PostOrdersRequestBodyItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    merchant_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    merchant_order_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    recipient: PostOrdersRequestBodyRecipientConsigneeNewV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient' }})
    shipping_method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingMethod' }})
    warehouse: Optional[PostOrdersRequestBodyWarehouse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warehouse' }})
    

@dataclass
class PostOrdersSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostOrdersRequest:
    request: PostOrdersRequestBodyOrderRequestV2 = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostOrdersSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostOrders409ApplicationJSONErrorStandardWithContextV2:
    context: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONCurrentStatusStatusActionRequiredBy:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONCurrentStatusStatusStage:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONCurrentStatusStatusState:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONCurrentStatusStatusStatusTypeV2:
    action_required_by: Optional[PostOrders201ApplicationJSONCurrentStatusStatusActionRequiredBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionRequiredBy' }})
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    detail_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailCode' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isClosed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    stage: PostOrders201ApplicationJSONCurrentStatusStatusStage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    state: PostOrders201ApplicationJSONCurrentStatusStatusState = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONCurrentStatusStatusEventV2:
    created_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[PostOrders201ApplicationJSONCurrentStatusStatusStatusTypeV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONMerchantMerchantV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONOriginalConsigneeIsoIsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso2' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONOriginalConsigneeConsigneeV2:
    address1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address_locality: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLocality' }})
    address_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressRegion' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso: Optional[PostOrders201ApplicationJSONOriginalConsigneeIsoIsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONParentOrder:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONTrackingNumbersCarrierCarrierSimpleV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONTrackingNumbersTrackingNumberV2:
    barcode_scan_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcodeScanValue' }})
    carrier: Optional[PostOrders201ApplicationJSONTrackingNumbersCarrierCarrierSimpleV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONWarehouseWarehouseV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostOrders201ApplicationJSONOrderResponseV2:
    current_status: PostOrders201ApplicationJSONCurrentStatusStatusEventV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentStatus' }})
    depart_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dispatch_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispatchDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    merchant: PostOrders201ApplicationJSONMerchantMerchantV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant' }})
    merchant_order_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    merchant_shipping_method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantShippingMethod' }})
    original_consignee: PostOrders201ApplicationJSONOriginalConsigneeConsigneeV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalConsignee' }})
    parent_order: Optional[PostOrders201ApplicationJSONParentOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentOrder' }})
    purchase_order_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseOrderNum' }})
    recorded_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tracking_numbers: Optional[List[PostOrders201ApplicationJSONTrackingNumbersTrackingNumberV2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingNumbers' }})
    validated_consignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validatedConsignee' }})
    warehouse: Optional[PostOrders201ApplicationJSONWarehouseWarehouseV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warehouse' }})
    

@dataclass
class PostOrdersResponse:
    content_type: str = field(default=None)
    error_standard_with_context_v2: Optional[PostOrders409ApplicationJSONErrorStandardWithContextV2] = field(default=None)
    order_response_v2: Optional[PostOrders201ApplicationJSONOrderResponseV2] = field(default=None)
    status_code: int = field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema] = field(default=None)
    
