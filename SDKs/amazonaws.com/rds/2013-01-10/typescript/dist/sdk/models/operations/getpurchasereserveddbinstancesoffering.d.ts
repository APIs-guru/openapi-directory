import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPurchaseReservedDbInstancesOfferingActionEnum {
    PurchaseReservedDbInstancesOffering = "PurchaseReservedDBInstancesOffering"
}
export declare enum GetPurchaseReservedDbInstancesOfferingVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetPurchaseReservedDbInstancesOfferingQueryParams extends SpeakeasyBase {
    action: GetPurchaseReservedDbInstancesOfferingActionEnum;
    dbInstanceCount?: number;
    reservedDbInstanceId?: string;
    reservedDbInstancesOfferingId: string;
    version: GetPurchaseReservedDbInstancesOfferingVersionEnum;
}
export declare class GetPurchaseReservedDbInstancesOfferingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPurchaseReservedDbInstancesOfferingRequest extends SpeakeasyBase {
    queryParams: GetPurchaseReservedDbInstancesOfferingQueryParams;
    headers: GetPurchaseReservedDbInstancesOfferingHeaders;
}
export declare class GetPurchaseReservedDbInstancesOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
