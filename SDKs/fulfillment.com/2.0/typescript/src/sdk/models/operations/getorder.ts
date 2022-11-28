import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetOrderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=hydrate" })
  hydrate?: shared.HydrateParamEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=merchantId" })
  merchantId?: number;
}


export class GetOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


// GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
/** 
 * Responsibility for resolving this issue
**/
export class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionRequiredBy" })
  actionRequiredBy?: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;

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
  stage: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State;
}


export class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2;
}


export class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lotNum" })
  lotNum?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=serialNum" })
  serialNum?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=externalSku" })
  externalSku?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=totalQuantity" })
  totalQuantity?: number;
}


export class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=declaredValue" })
  declaredValue?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=inventoryDetails", elemType: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails })
  inventoryDetails?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails[];

  @SpeakeasyMetadata({ data: "json, name=lineDetails" })
  lineDetails?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails;

  @SpeakeasyMetadata({ data: "json, name=requestedSkuData" })
  requestedSkuData?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData;
}


export class GetOrder200ApplicationJsonOrderResponseV2MerchantV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=iso2" })
  iso2?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 extends SpeakeasyBase {
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
  iso?: GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2;

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


export class GetOrder200ApplicationJsonOrderResponseV2ParentOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canReprintPostage" })
  canReprintPostage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=includePeripherals" })
  includePeripherals?: boolean;

  @SpeakeasyMetadata({ data: "json, name=internalRatesOnly" })
  internalRatesOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=requiresDimensions" })
  requiresDimensions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=symbol" })
  symbol: string;
}


export class GetOrder200ApplicationJsonOrderResponseV2TrackingNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2;
}


export class GetOrder200ApplicationJsonOrderResponseV2WarehouseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


// GetOrder200ApplicationJsonOrderResponseV2
/** 
 * Requires hydrate to be set in the request and the corresponding node will be filled.
**/
export class GetOrder200ApplicationJsonOrderResponseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentStatus" })
  currentStatus: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2;

  @SpeakeasyMetadata({ data: "json, name=departDate" })
  departDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=dispatchDate" })
  dispatchDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=integrator" })
  integrator?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2 })
  lineItems?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2[];

  @SpeakeasyMetadata({ data: "json, name=merchant" })
  merchant: GetOrder200ApplicationJsonOrderResponseV2MerchantV2;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=merchantShippingMethod" })
  merchantShippingMethod: string;

  @SpeakeasyMetadata({ data: "json, name=originalConsignee" })
  originalConsignee: GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2;

  @SpeakeasyMetadata({ data: "json, name=parentOrder" })
  parentOrder?: GetOrder200ApplicationJsonOrderResponseV2ParentOrder;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNum" })
  purchaseOrderNum?: string;

  @SpeakeasyMetadata({ data: "json, name=recordedOn" })
  recordedOn: Date;

  @SpeakeasyMetadata({ data: "json, name=trackingNumbers", elemType: GetOrder200ApplicationJsonOrderResponseV2TrackingNumbers })
  trackingNumbers?: GetOrder200ApplicationJsonOrderResponseV2TrackingNumbers[];

  @SpeakeasyMetadata({ data: "json, name=validatedConsignee" })
  validatedConsignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;

  @SpeakeasyMetadata({ data: "json, name=warehouse" })
  warehouse?: GetOrder200ApplicationJsonOrderResponseV2WarehouseV2;
}


export class GetOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrderPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrderQueryParams;

  @SpeakeasyMetadata()
  security: GetOrderSecurity;
}


export class GetOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneordersGetResponses200ContentApplication1jsonSchema?: any;
}
