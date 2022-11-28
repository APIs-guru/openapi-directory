import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostOrdersOrderRequestV2IntegratorEnum {
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


export class PostOrdersOrderRequestV2Items extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=declaredValue" })
  declaredValue: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku: string;
}


export class PostOrdersOrderRequestV2ConsigneeNewV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLocality" })
  addressLocality: string;

  @SpeakeasyMetadata({ data: "json, name=addressRegion" })
  addressRegion: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;
}


// PostOrdersOrderRequestV2Warehouse
/** 
 * We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.
**/
export class PostOrdersOrderRequestV2Warehouse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class PostOrdersOrderRequestV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrator" })
  integrator?: PostOrdersOrderRequestV2IntegratorEnum;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: PostOrdersOrderRequestV2Items })
  items: PostOrdersOrderRequestV2Items[];

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient" })
  recipient: PostOrdersOrderRequestV2ConsigneeNewV2;

  @SpeakeasyMetadata({ data: "json, name=shippingMethod" })
  shippingMethod: string;

  @SpeakeasyMetadata({ data: "json, name=warehouse" })
  warehouse?: PostOrdersOrderRequestV2Warehouse;
}


export class PostOrdersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class PostOrdersErrorStandardWithContextV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


// PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
/** 
 * Responsibility for resolving this issue
**/
export class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionRequiredBy" })
  actionRequiredBy?: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=detailCode" })
  detailCode: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isClosed" })
  isClosed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State;
}


export class PostOrdersOrderResponseV2StatusEventV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2;
}


export class PostOrdersOrderResponseV2MerchantV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=iso2" })
  iso2?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PostOrdersOrderResponseV2ConsigneeV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLocality" })
  addressLocality: string;

  @SpeakeasyMetadata({ data: "json, name=addressRegion" })
  addressRegion: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=iso" })
  iso?: PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}


export class PostOrdersOrderResponseV2ParentOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class PostOrdersOrderResponseV2TrackingNumberV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcodeScanValue" })
  barcodeScanValue?: string;

  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class PostOrdersOrderResponseV2WarehouseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class PostOrdersOrderResponseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentStatus" })
  currentStatus: PostOrdersOrderResponseV2StatusEventV2;

  @SpeakeasyMetadata({ data: "json, name=departDate" })
  departDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=dispatchDate" })
  dispatchDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=merchant" })
  merchant: PostOrdersOrderResponseV2MerchantV2;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=merchantShippingMethod" })
  merchantShippingMethod: string;

  @SpeakeasyMetadata({ data: "json, name=originalConsignee" })
  originalConsignee: PostOrdersOrderResponseV2ConsigneeV2;

  @SpeakeasyMetadata({ data: "json, name=parentOrder" })
  parentOrder?: PostOrdersOrderResponseV2ParentOrder;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNum" })
  purchaseOrderNum?: string;

  @SpeakeasyMetadata({ data: "json, name=recordedOn" })
  recordedOn: Date;

  @SpeakeasyMetadata({ data: "json, name=trackingNumbers", elemType: PostOrdersOrderResponseV2TrackingNumberV2 })
  trackingNumbers?: PostOrdersOrderResponseV2TrackingNumberV2[];

  @SpeakeasyMetadata({ data: "json, name=validatedConsignee" })
  validatedConsignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;

  @SpeakeasyMetadata({ data: "json, name=warehouse" })
  warehouse?: PostOrdersOrderResponseV2WarehouseV2;
}


export class PostOrdersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostOrdersOrderRequestV2;

  @SpeakeasyMetadata()
  security: PostOrdersSecurity;
}


export class PostOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorStandardWithContextV2?: PostOrdersErrorStandardWithContextV2;

  @SpeakeasyMetadata()
  orderResponseV2?: PostOrdersOrderResponseV2;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
