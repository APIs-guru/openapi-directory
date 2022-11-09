import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPurchaseReservedNodeOfferingActionEnum {
    PurchaseReservedNodeOffering = "PurchaseReservedNodeOffering"
}
export declare enum PostPurchaseReservedNodeOfferingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostPurchaseReservedNodeOfferingQueryParams extends SpeakeasyBase {
    action: PostPurchaseReservedNodeOfferingActionEnum;
    version: PostPurchaseReservedNodeOfferingVersionEnum;
}
export declare class PostPurchaseReservedNodeOfferingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPurchaseReservedNodeOfferingRequest extends SpeakeasyBase {
    queryParams: PostPurchaseReservedNodeOfferingQueryParams;
    headers: PostPurchaseReservedNodeOfferingHeaders;
    request?: Uint8Array;
}
export declare class PostPurchaseReservedNodeOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
