import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetOrderQueryParams extends SpeakeasyBase {
    hydrate?: shared.HydrateParamEnum[];
    merchantId?: number;
}
export declare class GetOrderSecurity extends SpeakeasyBase {
    fdcAuth: shared.SchemeFdcAuth;
}
/**
 * Responsibility for resolving this issue
**/
export declare class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
    id?: number;
    name?: string;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 extends SpeakeasyBase {
    actionRequiredBy?: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;
    code: string;
    detail?: string;
    detailCode: string;
    id?: number;
    isClosed?: boolean;
    name?: string;
    reason?: string;
    stage: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage;
    state: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2 extends SpeakeasyBase {
    createdBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
    date?: Date;
    id: number;
    reason?: string;
    status?: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails extends SpeakeasyBase {
    expirationDate?: Date;
    lotNum?: string;
    quantity?: number;
    serialNum?: string;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails extends SpeakeasyBase {
    description?: string;
    externalSku?: string;
    id?: number;
    name?: string;
    totalQuantity?: number;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData extends SpeakeasyBase {
    declaredValue?: string;
    id?: number;
    quantity?: number;
    sku?: string;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2 extends SpeakeasyBase {
    id?: number;
    inventoryDetails?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails[];
    lineDetails?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails;
    requestedSkuData?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2MerchantV2 extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
    id?: number;
    iso2?: string;
    name?: string;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2 extends SpeakeasyBase {
    address1: string;
    address2?: string;
    addressLocality: string;
    addressRegion: string;
    companyName?: string;
    country: string;
    email?: string;
    firstName: string;
    id: number;
    iso?: GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2;
    lastName: string;
    phone?: string;
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2ParentOrder extends SpeakeasyBase {
    id?: number;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 extends SpeakeasyBase {
    canReprintPostage?: boolean;
    enabled?: boolean;
    id: number;
    includePeripherals?: boolean;
    internalRatesOnly?: boolean;
    name: string;
    requiresDimensions?: boolean;
    symbol: string;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2TrackingNumbers extends SpeakeasyBase {
    carrier?: GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2;
}
export declare class GetOrder200ApplicationJsonOrderResponseV2WarehouseV2 extends SpeakeasyBase {
    id: number;
}
/**
 * Requires hydrate to be set in the request and the corresponding node will be filled.
**/
export declare class GetOrder200ApplicationJsonOrderResponseV2 extends SpeakeasyBase {
    currentStatus: GetOrder200ApplicationJsonOrderResponseV2StatusEventV2;
    departDate?: Date;
    dispatchDate?: Date;
    id: number;
    integrator?: string;
    lineItems?: GetOrder200ApplicationJsonOrderResponseV2LineItemsResponseV2[];
    merchant: GetOrder200ApplicationJsonOrderResponseV2MerchantV2;
    merchantOrderId: string;
    merchantShippingMethod: string;
    originalConsignee: GetOrder200ApplicationJsonOrderResponseV2ConsigneeV2;
    parentOrder?: GetOrder200ApplicationJsonOrderResponseV2ParentOrder;
    purchaseOrderNum?: string;
    recordedOn: Date;
    trackingNumbers?: GetOrder200ApplicationJsonOrderResponseV2TrackingNumbers[];
    validatedConsignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;
    warehouse?: GetOrder200ApplicationJsonOrderResponseV2WarehouseV2;
}
export declare class GetOrderRequest extends SpeakeasyBase {
    pathParams: GetOrderPathParams;
    queryParams: GetOrderQueryParams;
    security: GetOrderSecurity;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oneordersGetResponses200ContentApplication1jsonSchema?: any;
}
