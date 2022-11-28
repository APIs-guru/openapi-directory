import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrdersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=hydrate" })
  hydrate?: shared.HydrateParamEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=merchantIds" })
  merchantIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=warehouseIds" })
  warehouseIds?: number[];
}


export class GetOrdersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class GetOrdersErrorStandardV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


// GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
/** 
 * Responsibility for resolving this issue
**/
export class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionRequiredBy" })
  actionRequiredBy?: GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;

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
  stage: GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State;
}


export class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2;
}


export class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lotNum" })
  lotNum?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=serialNum" })
  serialNum?: string;
}


export class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails extends SpeakeasyBase {
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


export class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=declaredValue" })
  declaredValue?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}


export class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=inventoryDetails", elemType: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails })
  inventoryDetails?: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails[];

  @SpeakeasyMetadata({ data: "json, name=lineDetails" })
  lineDetails?: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails;

  @SpeakeasyMetadata({ data: "json, name=requestedSkuData" })
  requestedSkuData?: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData;
}


export class GetOrders200ApplicationJsonOrderResponseV2MerchantV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=iso2" })
  iso2?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2 extends SpeakeasyBase {
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
  iso?: GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2;

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


export class GetOrders200ApplicationJsonOrderResponseV2ParentOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 extends SpeakeasyBase {
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


export class GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2;
}


export class GetOrders200ApplicationJsonOrderResponseV2WarehouseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


// GetOrders200ApplicationJsonOrderResponseV2
/** 
 * Requires hydrate to be set in the request and the corresponding node will be filled.
**/
export class GetOrders200ApplicationJsonOrderResponseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentStatus" })
  currentStatus: GetOrders200ApplicationJsonOrderResponseV2StatusEventV2;

  @SpeakeasyMetadata({ data: "json, name=departDate" })
  departDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=dispatchDate" })
  dispatchDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=integrator" })
  integrator?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 })
  lineItems?: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2[];

  @SpeakeasyMetadata({ data: "json, name=merchant" })
  merchant: GetOrders200ApplicationJsonOrderResponseV2MerchantV2;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=merchantShippingMethod" })
  merchantShippingMethod: string;

  @SpeakeasyMetadata({ data: "json, name=originalConsignee" })
  originalConsignee: GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2;

  @SpeakeasyMetadata({ data: "json, name=parentOrder" })
  parentOrder?: GetOrders200ApplicationJsonOrderResponseV2ParentOrder;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNum" })
  purchaseOrderNum?: string;

  @SpeakeasyMetadata({ data: "json, name=recordedOn" })
  recordedOn: Date;

  @SpeakeasyMetadata({ data: "json, name=trackingNumbers", elemType: GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers })
  trackingNumbers?: GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers[];

  @SpeakeasyMetadata({ data: "json, name=validatedConsignee" })
  validatedConsignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;

  @SpeakeasyMetadata({ data: "json, name=warehouse" })
  warehouse?: GetOrders200ApplicationJsonOrderResponseV2WarehouseV2;
}


export class GetOrdersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOrdersQueryParams;

  @SpeakeasyMetadata()
  security: GetOrdersSecurity;
}


export class GetOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorStandardV2?: GetOrdersErrorStandardV2;

  @SpeakeasyMetadata()
  orderResponseOneOfV2?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
