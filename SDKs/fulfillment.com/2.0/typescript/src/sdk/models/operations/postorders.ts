import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostOrdersOrderRequestV2IntegratorEnum {
    OneShoppingCart = "1ShoppingCart"
,    ThreedCart = "3dCart"
,    AdobeBc = "AdobeBC"
,    AmazonAu = "AmazonAU"
,    AmazonEu = "AmazonEU"
,    AmazonNa = "AmazonNA"
,    BigCommerce = "BigCommerce"
,    BrandBoom = "BrandBoom"
,    BrightPearl = "BrightPearl"
,    BuyGoods = "BuyGoods"
,    Celery = "Celery"
,    ChannelAdvisor = "ChannelAdvisor"
,    Clickbank = "Clickbank"
,    CommerceHub = "CommerceHub"
,    Custom = "Custom"
,    Demandware = "Demandware"
,    Ebay = "Ebay"
,    Ecwid = "Ecwid"
,    Etsy = "Etsy"
,    FoxyCart = "FoxyCart"
,    Goodsie = "Goodsie"
,    Infusionsoft = "Infusionsoft"
,    Konnektive = "Konnektive"
,    LimeLight = "LimeLight"
,    Linio = "Linio"
,    Linnworks = "Linnworks"
,    Magento = "Magento"
,    Netsuite = "Netsuite"
,    NewEgg = "NewEgg"
,    Nexternal = "Nexternal"
,    NuOrder = "NuOrder"
,    Opencart = "Opencart"
,    OrderWave = "OrderWave"
,    OsCommerce1 = "osCommerce1"
,    Overstock = "Overstock"
,    PayPal = "PayPal"
,    PrestaShop = "PrestaShop"
,    Pricefalls = "Pricefalls"
,    Quickbooks = "Quickbooks"
,    Rakuten = "Rakuten"
,    Sears = "Sears"
,    Sellbrite = "Sellbrite"
,    SellerCloud = "SellerCloud"
,    Shipstation = "Shipstation"
,    Shopify = "Shopify"
,    Skubana = "Skubana"
,    SolidCommerce = "SolidCommerce"
,    SparkPay = "SparkPay"
,    SpreeCommerce = "SpreeCommerce"
,    SpsCommerce = "spsCommerce"
,    StitchLabs = "StitchLabs"
,    StoneEdge = "StoneEdge"
,    TradeGecko = "TradeGecko"
,    UltraCart = "UltraCart"
,    Volusion = "Volusion"
,    Vtex = "VTEX"
,    Walmart = "Walmart"
,    WooCommerce = "WooCommerce"
,    Yahoo = "Yahoo"
}


export class PostOrdersOrderRequestV2Items extends SpeakeasyBase {
  @Metadata({ data: "json, name=declaredValue" })
  declaredValue: string;

  @Metadata({ data: "json, name=quantity" })
  quantity: number;

  @Metadata({ data: "json, name=sku" })
  sku: string;
}


export class PostOrdersOrderRequestV2ConsigneeNewV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=address1" })
  address1: string;

  @Metadata({ data: "json, name=address2" })
  address2?: string;

  @Metadata({ data: "json, name=addressLocality" })
  addressLocality: string;

  @Metadata({ data: "json, name=addressRegion" })
  addressRegion: string;

  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=phone" })
  phone: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;
}


// PostOrdersOrderRequestV2Warehouse
/** 
 * We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.
**/
export class PostOrdersOrderRequestV2Warehouse extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class PostOrdersOrderRequestV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=integrator" })
  integrator?: PostOrdersOrderRequestV2IntegratorEnum;

  @Metadata({ data: "json, name=items", elemType: operations.PostOrdersOrderRequestV2Items })
  items: PostOrdersOrderRequestV2Items[];

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: number;

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=recipient" })
  recipient: PostOrdersOrderRequestV2ConsigneeNewV2;

  @Metadata({ data: "json, name=shippingMethod" })
  shippingMethod: string;

  @Metadata({ data: "json, name=warehouse" })
  warehouse?: PostOrdersOrderRequestV2Warehouse;
}


export class PostOrdersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class PostOrdersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostOrdersOrderRequestV2;

  @Metadata()
  security: PostOrdersSecurity;
}


export class PostOrdersErrorStandardWithContextV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: Map<string, any>[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


// PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
/** 
 * Responsibility for resolving this issue
**/
export class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionRequiredBy" })
  actionRequiredBy?: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;

  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=detailCode" })
  detailCode: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isClosed" })
  isClosed?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=stage" })
  stage: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage;

  @Metadata({ data: "json, name=state" })
  state: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State;
}


export class PostOrdersOrderResponseV2StatusEventV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdBy" })
  createdBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2;
}


export class PostOrdersOrderResponseV2MerchantV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=iso2" })
  iso2?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PostOrdersOrderResponseV2ConsigneeV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=address1" })
  address1: string;

  @Metadata({ data: "json, name=address2" })
  address2?: string;

  @Metadata({ data: "json, name=addressLocality" })
  addressLocality: string;

  @Metadata({ data: "json, name=addressRegion" })
  addressRegion: string;

  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=iso" })
  iso?: PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}


export class PostOrdersOrderResponseV2ParentOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class PostOrdersOrderResponseV2TrackingNumberV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=barcodeScanValue" })
  barcodeScanValue?: string;

  @Metadata({ data: "json, name=carrier" })
  carrier?: PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class PostOrdersOrderResponseV2WarehouseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class PostOrdersOrderResponseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentStatus" })
  currentStatus: PostOrdersOrderResponseV2StatusEventV2;

  @Metadata({ data: "json, name=departDate" })
  departDate?: Date;

  @Metadata({ data: "json, name=dispatchDate" })
  dispatchDate?: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=merchant" })
  merchant: PostOrdersOrderResponseV2MerchantV2;

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId: string;

  @Metadata({ data: "json, name=merchantShippingMethod" })
  merchantShippingMethod: string;

  @Metadata({ data: "json, name=originalConsignee" })
  originalConsignee: PostOrdersOrderResponseV2ConsigneeV2;

  @Metadata({ data: "json, name=parentOrder" })
  parentOrder?: PostOrdersOrderResponseV2ParentOrder;

  @Metadata({ data: "json, name=purchaseOrderNum" })
  purchaseOrderNum?: string;

  @Metadata({ data: "json, name=recordedOn" })
  recordedOn: Date;

  @Metadata({ data: "json, name=trackingNumbers", elemType: operations.PostOrdersOrderResponseV2TrackingNumberV2 })
  trackingNumbers?: PostOrdersOrderResponseV2TrackingNumberV2[];

  @Metadata({ data: "json, name=validatedConsignee" })
  validatedConsignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;

  @Metadata({ data: "json, name=warehouse" })
  warehouse?: PostOrdersOrderResponseV2WarehouseV2;
}


export class PostOrdersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorStandardWithContextV2?: PostOrdersErrorStandardWithContextV2;

  @Metadata()
  orderResponseV2?: PostOrdersOrderResponseV2;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
