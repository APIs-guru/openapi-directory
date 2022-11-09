import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetOrderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=hydrate" })
  hydrate?: shared.HydrateParamEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=merchantId" })
  merchantId?: number;
}


export class GetOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class GetOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrderPathParams;

  @Metadata()
  queryParams: GetOrderQueryParams;

  @Metadata()
  security: GetOrderSecurity;
}


// GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
/** 
 * Responsibility for resolving this issue
**/
export class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionRequiredBy" })
  actionRequiredBy?: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;

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
  stage: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage;

  @Metadata({ data: "json, name=state" })
  state: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State;
}


export class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdBy" })
  createdBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2;
}


export class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=lotNum" })
  lotNum?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=serialNum" })
  serialNum?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=externalSku" })
  externalSku?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=totalQuantity" })
  totalQuantity?: number;
}


export class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData extends SpeakeasyBase {
  @Metadata({ data: "json, name=declaredValue" })
  declaredValue?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=sku" })
  sku?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=inventoryDetails", elemType: operations.GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails })
  inventoryDetails?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails[];

  @Metadata({ data: "json, name=lineDetails" })
  lineDetails?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails;

  @Metadata({ data: "json, name=requestedSkuData" })
  requestedSkuData?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData;
}


export class GetOrder200ApplicationJsonOrderResponseV2MerchantV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=iso2" })
  iso2?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 extends SpeakeasyBase {
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
  iso?: GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2;

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


export class GetOrder200ApplicationJsonOrderResponseV2ParentOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=canReprintPostage" })
  canReprintPostage?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=includePeripherals" })
  includePeripherals?: boolean;

  @Metadata({ data: "json, name=internalRatesOnly" })
  internalRatesOnly?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=requiresDimensions" })
  requiresDimensions?: boolean;

  @Metadata({ data: "json, name=symbol" })
  symbol: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2TrackingNumbers extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrier" })
  carrier?: GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2;
}


export class GetOrder200ApplicationJsonOrderResponseV2WarehouseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


// GetOrder200ApplicationJsonOrderResponseV2
/** 
 * Requires hydrate to be set in the request and the corresponding node will be filled.
**/
export class GetOrder200ApplicationJsonOrderResponseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentStatus" })
  currentStatus: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2;

  @Metadata({ data: "json, name=departDate" })
  departDate?: Date;

  @Metadata({ data: "json, name=dispatchDate" })
  dispatchDate?: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=integrator" })
  integrator?: string;

  @Metadata({ data: "json, name=lineItems", elemType: operations.GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2 })
  lineItems?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2[];

  @Metadata({ data: "json, name=merchant" })
  merchant: GetOrder200ApplicationJsonOrderResponseV2MerchantV2;

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId: string;

  @Metadata({ data: "json, name=merchantShippingMethod" })
  merchantShippingMethod: string;

  @Metadata({ data: "json, name=originalConsignee" })
  originalConsignee: GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2;

  @Metadata({ data: "json, name=parentOrder" })
  parentOrder?: GetOrder200ApplicationJsonOrderResponseV2ParentOrder;

  @Metadata({ data: "json, name=purchaseOrderNum" })
  purchaseOrderNum?: string;

  @Metadata({ data: "json, name=recordedOn" })
  recordedOn: Date;

  @Metadata({ data: "json, name=trackingNumbers", elemType: operations.GetOrder200ApplicationJsonOrderResponseV2TrackingNumbers })
  trackingNumbers?: GetOrder200ApplicationJsonOrderResponseV2TrackingNumbers[];

  @Metadata({ data: "json, name=validatedConsignee" })
  validatedConsignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;

  @Metadata({ data: "json, name=warehouse" })
  warehouse?: GetOrder200ApplicationJsonOrderResponseV2WarehouseV2;
}


export class GetOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneordersGetResponses200ContentApplication1jsonSchema?: any;
}
