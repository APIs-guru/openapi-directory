import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPurchaseReservedDbInstancesOfferingActionEnum {
    PurchaseReservedDbInstancesOffering = "PurchaseReservedDBInstancesOffering"
}
export declare enum PostPurchaseReservedDbInstancesOfferingVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class PostPurchaseReservedDbInstancesOfferingQueryParams extends SpeakeasyBase {
    action: PostPurchaseReservedDbInstancesOfferingActionEnum;
    version: PostPurchaseReservedDbInstancesOfferingVersionEnum;
}
export declare class PostPurchaseReservedDbInstancesOfferingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPurchaseReservedDbInstancesOfferingRequest extends SpeakeasyBase {
    queryParams: PostPurchaseReservedDbInstancesOfferingQueryParams;
    headers: PostPurchaseReservedDbInstancesOfferingHeaders;
    request?: Uint8Array;
}
export declare class PostPurchaseReservedDbInstancesOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
