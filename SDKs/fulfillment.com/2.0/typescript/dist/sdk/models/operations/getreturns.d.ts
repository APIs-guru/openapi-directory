import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReturnsQueryParams extends SpeakeasyBase {
    fromDate: string;
    limit?: number;
    page?: number;
    toDate: string;
}
export declare class GetReturnsSecurity extends SpeakeasyBase {
    fdcAuth: shared.SchemeFdcAuth;
}
export declare class GetReturnsReturnsArrayV2ReturnV2Order extends SpeakeasyBase {
    id?: number;
    merchantId?: number;
    merchantOrderId?: string;
}
export declare class GetReturnsReturnsArrayV2ReturnV2Reason extends SpeakeasyBase {
    id: number;
    title: string;
}
export declare class GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item extends SpeakeasyBase {
    id?: number;
    sku?: string;
}
export declare class GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason extends SpeakeasyBase {
    id?: number;
    title?: string;
}
export declare class GetReturnsReturnsArrayV2ReturnV2RmaItemV2 extends SpeakeasyBase {
    comments?: string;
    id?: number;
    item?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item;
    nonRestockedReason?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason;
    quantityExpected?: number;
    quantityRestocked?: number;
    quantityReturned?: number;
    quantityShipped?: number;
}
export declare class GetReturnsReturnsArrayV2ReturnV2Status extends SpeakeasyBase {
    id: number;
    title: string;
}
export declare class GetReturnsReturnsArrayV2ReturnV2UserV2 extends SpeakeasyBase {
    id: number;
}
export declare class GetReturnsReturnsArrayV2ReturnV2 extends SpeakeasyBase {
    comments?: string;
    createdAt: Date;
    createdBy: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
    id: number;
    order?: GetReturnsReturnsArrayV2ReturnV2Order;
    reason: GetReturnsReturnsArrayV2ReturnV2Reason;
    returnedBy?: string;
    rmaItems?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2[];
    rmaNumber?: string;
    status: GetReturnsReturnsArrayV2ReturnV2Status;
    updatedAt: Date;
    updatedBy: GetReturnsReturnsArrayV2ReturnV2UserV2;
}
export declare class GetReturnsReturnsArrayV2MetaPaginationV2 extends SpeakeasyBase {
    count?: number;
    currentPage?: number;
    total?: number;
    totalPages?: number;
}
export declare class GetReturnsReturnsArrayV2Meta extends SpeakeasyBase {
    pagination?: GetReturnsReturnsArrayV2MetaPaginationV2;
}
export declare class GetReturnsReturnsArrayV2 extends SpeakeasyBase {
    data?: GetReturnsReturnsArrayV2ReturnV2[];
    meta?: GetReturnsReturnsArrayV2Meta;
}
export declare class GetReturnsRequest extends SpeakeasyBase {
    queryParams: GetReturnsQueryParams;
    security: GetReturnsSecurity;
}
export declare class GetReturnsResponse extends SpeakeasyBase {
    contentType: string;
    returnsArrayV2?: GetReturnsReturnsArrayV2;
    statusCode: number;
}
