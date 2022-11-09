import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeReservedDbInstancesOfferingsActionEnum {
    DescribeReservedDbInstancesOfferings = "DescribeReservedDBInstancesOfferings"
}
export declare enum GetDescribeReservedDbInstancesOfferingsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetDescribeReservedDbInstancesOfferingsQueryParams extends SpeakeasyBase {
    action: GetDescribeReservedDbInstancesOfferingsActionEnum;
    dbInstanceClass?: string;
    duration?: string;
    marker?: string;
    maxRecords?: number;
    multiAz?: boolean;
    offeringType?: string;
    productDescription?: string;
    reservedDbInstancesOfferingId?: string;
    version: GetDescribeReservedDbInstancesOfferingsVersionEnum;
}
export declare class GetDescribeReservedDbInstancesOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeReservedDbInstancesOfferingsRequest extends SpeakeasyBase {
    queryParams: GetDescribeReservedDbInstancesOfferingsQueryParams;
    headers: GetDescribeReservedDbInstancesOfferingsHeaders;
}
export declare class GetDescribeReservedDbInstancesOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
