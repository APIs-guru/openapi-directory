import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostOrdersOrderRequestV2IntegratorEnum {
    OneShoppingCart = "1ShoppingCart",
    ThreedCart = "3dCart",
    AdobeBc = "AdobeBC",
    AmazonAu = "AmazonAU",
    AmazonEu = "AmazonEU",
    AmazonNa = "AmazonNA",
    BigCommerce = "BigCommerce",
    BrandBoom = "BrandBoom",
    BrightPearl = "BrightPearl",
    BuyGoods = "BuyGoods",
    Celery = "Celery",
    ChannelAdvisor = "ChannelAdvisor",
    Clickbank = "Clickbank",
    CommerceHub = "CommerceHub",
    Custom = "Custom",
    Demandware = "Demandware",
    Ebay = "Ebay",
    Ecwid = "Ecwid",
    Etsy = "Etsy",
    FoxyCart = "FoxyCart",
    Goodsie = "Goodsie",
    Infusionsoft = "Infusionsoft",
    Konnektive = "Konnektive",
    LimeLight = "LimeLight",
    Linio = "Linio",
    Linnworks = "Linnworks",
    Magento = "Magento",
    Netsuite = "Netsuite",
    NewEgg = "NewEgg",
    Nexternal = "Nexternal",
    NuOrder = "NuOrder",
    Opencart = "Opencart",
    OrderWave = "OrderWave",
    OsCommerce1 = "osCommerce1",
    Overstock = "Overstock",
    PayPal = "PayPal",
    PrestaShop = "PrestaShop",
    Pricefalls = "Pricefalls",
    Quickbooks = "Quickbooks",
    Rakuten = "Rakuten",
    Sears = "Sears",
    Sellbrite = "Sellbrite",
    SellerCloud = "SellerCloud",
    Shipstation = "Shipstation",
    Shopify = "Shopify",
    Skubana = "Skubana",
    SolidCommerce = "SolidCommerce",
    SparkPay = "SparkPay",
    SpreeCommerce = "SpreeCommerce",
    SpsCommerce = "spsCommerce",
    StitchLabs = "StitchLabs",
    StoneEdge = "StoneEdge",
    TradeGecko = "TradeGecko",
    UltraCart = "UltraCart",
    Volusion = "Volusion",
    Vtex = "VTEX",
    Walmart = "Walmart",
    WooCommerce = "WooCommerce",
    Yahoo = "Yahoo"
}
export declare class PostOrdersOrderRequestV2Items extends SpeakeasyBase {
    declaredValue: string;
    quantity: number;
    sku: string;
}
export declare class PostOrdersOrderRequestV2ConsigneeNewV2 extends SpeakeasyBase {
    address1: string;
    address2?: string;
    addressLocality: string;
    addressRegion: string;
    companyName?: string;
    country: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    postalCode?: string;
}
/**
 * We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.
**/
export declare class PostOrdersOrderRequestV2Warehouse extends SpeakeasyBase {
    id?: number;
}
export declare class PostOrdersOrderRequestV2 extends SpeakeasyBase {
    integrator?: PostOrdersOrderRequestV2IntegratorEnum;
    items: PostOrdersOrderRequestV2Items[];
    merchantId?: number;
    merchantOrderId: string;
    notes?: string;
    recipient: PostOrdersOrderRequestV2ConsigneeNewV2;
    shippingMethod: string;
    warehouse?: PostOrdersOrderRequestV2Warehouse;
}
export declare class PostOrdersSecurity extends SpeakeasyBase {
    fdcAuth: shared.SchemeFdcAuth;
}
export declare class PostOrdersErrorStandardWithContextV2 extends SpeakeasyBase {
    context?: Map<string, any>[];
    message?: string;
}
/**
 * Responsibility for resolving this issue
**/
export declare class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
    id?: number;
    name?: string;
}
export declare class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 extends SpeakeasyBase {
    actionRequiredBy?: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;
    code: string;
    detail?: string;
    detailCode: string;
    id?: number;
    isClosed?: boolean;
    name?: string;
    reason?: string;
    stage: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage;
    state: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State;
}
export declare class PostOrdersOrderResponseV2StatusEventV2 extends SpeakeasyBase {
    createdBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
    date?: Date;
    id: number;
    reason?: string;
    status?: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2;
}
export declare class PostOrdersOrderResponseV2MerchantV2 extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare class PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
    id?: number;
    iso2?: string;
    name?: string;
}
export declare class PostOrdersOrderResponseV2ConsigneeV2 extends SpeakeasyBase {
    address1: string;
    address2?: string;
    addressLocality: string;
    addressRegion: string;
    companyName?: string;
    country: string;
    email?: string;
    firstName: string;
    id: number;
    iso?: PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2;
    lastName: string;
    phone?: string;
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
export declare class PostOrdersOrderResponseV2ParentOrder extends SpeakeasyBase {
    id?: number;
}
export declare class PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
    id: number;
}
export declare class PostOrdersOrderResponseV2TrackingNumberV2 extends SpeakeasyBase {
    barcodeScanValue?: string;
    carrier?: PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2;
    value?: string;
}
export declare class PostOrdersOrderResponseV2WarehouseV2 extends SpeakeasyBase {
    id: number;
}
export declare class PostOrdersOrderResponseV2 extends SpeakeasyBase {
    currentStatus: PostOrdersOrderResponseV2StatusEventV2;
    departDate?: Date;
    dispatchDate?: Date;
    id: number;
    merchant: PostOrdersOrderResponseV2MerchantV2;
    merchantOrderId: string;
    merchantShippingMethod: string;
    originalConsignee: PostOrdersOrderResponseV2ConsigneeV2;
    parentOrder?: PostOrdersOrderResponseV2ParentOrder;
    purchaseOrderNum?: string;
    recordedOn: Date;
    trackingNumbers?: PostOrdersOrderResponseV2TrackingNumberV2[];
    validatedConsignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;
    warehouse?: PostOrdersOrderResponseV2WarehouseV2;
}
export declare class PostOrdersRequest extends SpeakeasyBase {
    request: PostOrdersOrderRequestV2;
    security: PostOrdersSecurity;
}
export declare class PostOrdersResponse extends SpeakeasyBase {
    contentType: string;
    errorStandardWithContextV2?: PostOrdersErrorStandardWithContextV2;
    orderResponseV2?: PostOrdersOrderResponseV2;
    statusCode: number;
    oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
