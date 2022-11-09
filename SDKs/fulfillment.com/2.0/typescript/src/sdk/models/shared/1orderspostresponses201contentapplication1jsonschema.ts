import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./1returnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./1returnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";
import { OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee } from "./1orderspostresponses201contentapplication1jsonschemapropertiesoriginalconsignee";


// OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy
/** 
 * Responsibility for resolving this issue
**/
export class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionRequiredBy" })
  actionRequiredBy?: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy;

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
  stage: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage;

  @Metadata({ data: "json, name=state" })
  state: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdBy" })
  createdBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=iso2" })
  iso2?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2 extends SpeakeasyBase {
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
  iso?: OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaParentOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=barcodeScanValue" })
  barcodeScanValue?: string;

  @Metadata({ data: "json, name=carrier" })
  carrier?: OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class OneordersPostResponses201ContentApplication1jsonSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentStatus" })
  currentStatus: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2;

  @Metadata({ data: "json, name=departDate" })
  departDate?: Date;

  @Metadata({ data: "json, name=dispatchDate" })
  dispatchDate?: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=merchant" })
  merchant: OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2;

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId: string;

  @Metadata({ data: "json, name=merchantShippingMethod" })
  merchantShippingMethod: string;

  @Metadata({ data: "json, name=originalConsignee" })
  originalConsignee: OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2;

  @Metadata({ data: "json, name=parentOrder" })
  parentOrder?: OneordersPostResponses201ContentApplication1jsonSchemaParentOrder;

  @Metadata({ data: "json, name=purchaseOrderNum" })
  purchaseOrderNum?: string;

  @Metadata({ data: "json, name=recordedOn" })
  recordedOn: Date;

  @Metadata({ data: "json, name=trackingNumbers", elemType: shared.OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 })
  trackingNumbers?: OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2[];

  @Metadata({ data: "json, name=validatedConsignee" })
  validatedConsignee: OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;

  @Metadata({ data: "json, name=warehouse" })
  warehouse?: OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2;
}
