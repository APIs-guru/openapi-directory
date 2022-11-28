import { SpeakeasyBase } from "../../../internal/utils";
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./onereturnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";
import { OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee } from "./oneorderspostresponses201contentapplication1jsonschemapropertiesoriginalconsignee";
/**
 * Responsibility for resolving this issue
**/
export declare class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
    id?: number;
    name?: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2 extends SpeakeasyBase {
    actionRequiredBy?: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy;
    code: string;
    detail?: string;
    detailCode: string;
    id?: number;
    isClosed?: boolean;
    name?: string;
    reason?: string;
    stage: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage;
    state: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 extends SpeakeasyBase {
    createdBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
    date?: Date;
    id: number;
    reason?: string;
    status?: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2 extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 extends SpeakeasyBase {
    id?: number;
    iso2?: string;
    name?: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2 extends SpeakeasyBase {
    address1: string;
    address2?: string;
    addressLocality: string;
    addressRegion: string;
    companyName?: string;
    country: string;
    email?: string;
    firstName: string;
    id: number;
    iso?: OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2;
    lastName: string;
    phone?: string;
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaParentOrder extends SpeakeasyBase {
    id?: number;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
    id: number;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 extends SpeakeasyBase {
    barcodeScanValue?: string;
    carrier?: OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2;
    value?: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2 extends SpeakeasyBase {
    id: number;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchema extends SpeakeasyBase {
    currentStatus: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2;
    departDate?: Date;
    dispatchDate?: Date;
    id: number;
    merchant: OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2;
    merchantOrderId: string;
    merchantShippingMethod: string;
    originalConsignee: OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2;
    parentOrder?: OneordersPostResponses201ContentApplication1jsonSchemaParentOrder;
    purchaseOrderNum?: string;
    recordedOn: Date;
    trackingNumbers?: OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2[];
    validatedConsignee: OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;
    warehouse?: OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2;
}
