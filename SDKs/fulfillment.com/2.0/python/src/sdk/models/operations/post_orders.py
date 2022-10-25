from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class PostOrdersOrderRequestV2IntegratorEnum(str, Enum):
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
class PostOrdersOrderRequestV2Items:
    declared_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declaredValue' }})
    quantity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    sku: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderRequestV2ConsigneeNewV2:
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
class PostOrdersOrderRequestV2Warehouse:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderRequestV2:
    integrator: Optional[PostOrdersOrderRequestV2IntegratorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrator' }})
    items: List[PostOrdersOrderRequestV2Items] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    merchant_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    merchant_order_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    recipient: PostOrdersOrderRequestV2ConsigneeNewV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient' }})
    shipping_method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingMethod' }})
    warehouse: Optional[PostOrdersOrderRequestV2Warehouse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warehouse' }})
    

@dataclass
class PostOrdersSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostOrdersRequest:
    request: PostOrdersOrderRequestV2 = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostOrdersSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostOrdersErrorStandardWithContextV2:
    context: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2:
    action_required_by: Optional[PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionRequiredBy' }})
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    detail_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailCode' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isClosed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    stage: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    state: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2StatusEventV2:
    created_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[PostOrdersOrderResponseV2StatusEventV2StatusTypeV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2MerchantV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso2' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2ConsigneeV2:
    address1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address_locality: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLocality' }})
    address_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressRegion' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    iso: Optional[PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2ParentOrder:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2TrackingNumberV2:
    barcode_scan_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcodeScanValue' }})
    carrier: Optional[PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2WarehouseV2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2:
    current_status: PostOrdersOrderResponseV2StatusEventV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentStatus' }})
    depart_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dispatch_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispatchDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    merchant: PostOrdersOrderResponseV2MerchantV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant' }})
    merchant_order_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    merchant_shipping_method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantShippingMethod' }})
    original_consignee: PostOrdersOrderResponseV2ConsigneeV2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalConsignee' }})
    parent_order: Optional[PostOrdersOrderResponseV2ParentOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentOrder' }})
    purchase_order_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseOrderNum' }})
    recorded_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tracking_numbers: Optional[List[PostOrdersOrderResponseV2TrackingNumberV2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingNumbers' }})
    validated_consignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validatedConsignee' }})
    warehouse: Optional[PostOrdersOrderResponseV2WarehouseV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warehouse' }})
    

@dataclass
class PostOrdersResponse:
    content_type: str = field(default=None)
    error_standard_with_context_v2: Optional[PostOrdersErrorStandardWithContextV2] = field(default=None)
    order_response_v2: Optional[PostOrdersOrderResponseV2] = field(default=None)
    status_code: int = field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema] = field(default=None)
    
