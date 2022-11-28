from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
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
    declared_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('declaredValue') }})
    quantity: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sku: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderRequestV2ConsigneeNewV2:
    address1: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    address_locality: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLocality') }})
    address_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressRegion') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    phone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderRequestV2Warehouse:
    r"""PostOrdersOrderRequestV2Warehouse
    We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderRequestV2:
    items: List[PostOrdersOrderRequestV2Items] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    merchant_order_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    recipient: PostOrdersOrderRequestV2ConsigneeNewV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    shipping_method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingMethod') }})
    integrator: Optional[PostOrdersOrderRequestV2IntegratorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrator') }})
    merchant_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    warehouse: Optional[PostOrdersOrderRequestV2Warehouse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse') }})
    

@dataclass
class PostOrdersSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class PostOrdersErrorStandardWithContextV2:
    context: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy:
    r"""PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
    Responsibility for resolving this issue
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailCode') }})
    stage: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    state: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    action_required_by: Optional[PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionRequiredBy') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isClosed') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2StatusEventV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    created_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[PostOrdersOrderResponseV2StatusEventV2StatusTypeV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2MerchantV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso2') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2ConsigneeV2:
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
    iso: Optional[PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2ParentOrder:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2TrackingNumberV2:
    barcode_scan_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcodeScanValue') }})
    carrier: Optional[PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2WarehouseV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostOrdersOrderResponseV2:
    current_status: PostOrdersOrderResponseV2StatusEventV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStatus') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    merchant: PostOrdersOrderResponseV2MerchantV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    merchant_order_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    merchant_shipping_method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantShippingMethod') }})
    original_consignee: PostOrdersOrderResponseV2ConsigneeV2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalConsignee') }})
    recorded_on: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordedOn'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validated_consignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedConsignee') }})
    depart_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dispatch_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent_order: Optional[PostOrdersOrderResponseV2ParentOrder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentOrder') }})
    purchase_order_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderNum') }})
    tracking_numbers: Optional[List[PostOrdersOrderResponseV2TrackingNumberV2]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingNumbers') }})
    warehouse: Optional[PostOrdersOrderResponseV2WarehouseV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse') }})
    

@dataclass
class PostOrdersRequest:
    request: PostOrdersOrderRequestV2 = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostOrdersSecurity = field()
    

@dataclass
class PostOrdersResponse:
    content_type: str = field()
    status_code: int = field()
    error_standard_with_context_v2: Optional[PostOrdersErrorStandardWithContextV2] = field(default=None)
    order_response_v2: Optional[PostOrdersOrderResponseV2] = field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema] = field(default=None)
    
