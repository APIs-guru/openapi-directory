import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetPurchaseReservedNodeOfferingActionEnum {
    PurchaseReservedNodeOffering = "PurchaseReservedNodeOffering"
}
export declare enum GetPurchaseReservedNodeOfferingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetPurchaseReservedNodeOfferingQueryParams extends SpeakeasyBase {
    action: GetPurchaseReservedNodeOfferingActionEnum;
    nodeCount?: number;
    reservedNodeOfferingId: string;
    version: GetPurchaseReservedNodeOfferingVersionEnum;
}
export declare class GetPurchaseReservedNodeOfferingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPurchaseReservedNodeOfferingRequest extends SpeakeasyBase {
    queryParams: GetPurchaseReservedNodeOfferingQueryParams;
    headers: GetPurchaseReservedNodeOfferingHeaders;
}
export declare class GetPurchaseReservedNodeOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
