import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./onereturnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";
import { OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee } from "./oneorderspostresponses201contentapplication1jsonschemapropertiesoriginalconsignee";



// OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy
/** 
 * Responsibility for resolving this issue
**/
export class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionRequiredBy" })
  actionRequiredBy?: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy;

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
  stage: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=iso2" })
  iso2?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2 extends SpeakeasyBase {
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
  iso?: OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaParentOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcodeScanValue" })
  barcodeScanValue?: string;

  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class OneordersPostResponses201ContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentStatus" })
  currentStatus: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2;

  @SpeakeasyMetadata({ data: "json, name=departDate" })
  departDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=dispatchDate" })
  dispatchDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=merchant" })
  merchant: OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=merchantShippingMethod" })
  merchantShippingMethod: string;

  @SpeakeasyMetadata({ data: "json, name=originalConsignee" })
  originalConsignee: OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2;

  @SpeakeasyMetadata({ data: "json, name=parentOrder" })
  parentOrder?: OneordersPostResponses201ContentApplication1jsonSchemaParentOrder;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNum" })
  purchaseOrderNum?: string;

  @SpeakeasyMetadata({ data: "json, name=recordedOn" })
  recordedOn: Date;

  @SpeakeasyMetadata({ data: "json, name=trackingNumbers", elemType: OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 })
  trackingNumbers?: OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2[];

  @SpeakeasyMetadata({ data: "json, name=validatedConsignee" })
  validatedConsignee: OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;

  @SpeakeasyMetadata({ data: "json, name=warehouse" })
  warehouse?: OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2;
}
