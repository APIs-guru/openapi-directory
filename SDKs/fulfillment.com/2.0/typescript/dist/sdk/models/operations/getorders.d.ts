import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrdersQueryParams extends SpeakeasyBase {
    fromDate: string;
    hydrate?: shared.HydrateParamEnum[];
    limit?: number;
    merchantIds?: number[];
    page?: number;
    toDate: string;
    warehouseIds?: number[];
}
export declare class GetOrdersSecurity extends SpeakeasyBase {
    fdcAuth: shared.SchemeFdcAuth;
}
export declare class GetOrdersErrorStandardV2 extends SpeakeasyBase {
    message?: string;
}
/**
 * Responsibility for resolving this issue
**/
export declare class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
    id?: number;
    name?: string;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 extends SpeakeasyBase {
    actionRequiredBy?: GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;
    code: string;
    detail?: string;
    detailCode: string;
    id?: number;
    isClosed?: boolean;
    name?: string;
    reason?: string;
    stage: GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage;
    state: GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2 extends SpeakeasyBase {
    createdBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
    date?: Date;
    id: number;
    reason?: string;
    status?: GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails extends SpeakeasyBase {
    expirationDate?: Date;
    lotNum?: string;
    quantity?: number;
    serialNum?: string;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails extends SpeakeasyBase {
    description?: string;
    externalSku?: string;
    id?: number;
    name?: string;
    totalQuantity?: number;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData extends SpeakeasyBase {
    declaredValue?: string;
    id?: number;
    quantity?: number;
    sku?: string;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 extends SpeakeasyBase {
    id?: number;
    inventoryDetails?: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails[];
    lineDetails?: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails;
    requestedSkuData?: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2MerchantV2 extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
    id?: number;
    iso2?: string;
    name?: string;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2 extends SpeakeasyBase {
    address1: string;
    address2?: string;
    addressLocality: string;
    addressRegion: string;
    companyName?: string;
    country: string;
    email?: string;
    firstName: string;
    id: number;
    iso?: GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2;
    lastName: string;
    phone?: string;
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2ParentOrder extends SpeakeasyBase {
    id?: number;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 extends SpeakeasyBase {
    canReprintPostage?: boolean;
    enabled?: boolean;
    id: number;
    includePeripherals?: boolean;
    internalRatesOnly?: boolean;
    name: string;
    requiresDimensions?: boolean;
    symbol: string;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers extends SpeakeasyBase {
    carrier?: GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2;
}
export declare class GetOrders200ApplicationJsonOrderResponseV2WarehouseV2 extends SpeakeasyBase {
    id: number;
}
/**
 * Requires hydrate to be set in the request and the corresponding node will be filled.
**/
export declare class GetOrders200ApplicationJsonOrderResponseV2 extends SpeakeasyBase {
    currentStatus: GetOrders200ApplicationJsonOrderResponseV2StatusEventV2;
    departDate?: Date;
    dispatchDate?: Date;
    id: number;
    integrator?: string;
    lineItems?: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2[];
    merchant: GetOrders200ApplicationJsonOrderResponseV2MerchantV2;
    merchantOrderId: string;
    merchantShippingMethod: string;
    originalConsignee: GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2;
    parentOrder?: GetOrders200ApplicationJsonOrderResponseV2ParentOrder;
    purchaseOrderNum?: string;
    recordedOn: Date;
    trackingNumbers?: GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers[];
    validatedConsignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;
    warehouse?: GetOrders200ApplicationJsonOrderResponseV2WarehouseV2;
}
export declare class GetOrdersRequest extends SpeakeasyBase {
    queryParams: GetOrdersQueryParams;
    security: GetOrdersSecurity;
}
export declare class GetOrdersResponse extends SpeakeasyBase {
    contentType: string;
    errorStandardV2?: GetOrdersErrorStandardV2;
    orderResponseOneOfV2?: any;
    statusCode: number;
}
