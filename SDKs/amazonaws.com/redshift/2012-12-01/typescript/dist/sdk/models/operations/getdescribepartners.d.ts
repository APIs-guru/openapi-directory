import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribePartnersActionEnum {
    DescribePartners = "DescribePartners"
}
export declare enum GetDescribePartnersVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribePartnersQueryParams extends SpeakeasyBase {
    accountId: string;
    action: GetDescribePartnersActionEnum;
    clusterIdentifier: string;
    databaseName?: string;
    partnerName?: string;
    version: GetDescribePartnersVersionEnum;
}
export declare class GetDescribePartnersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribePartnersRequest extends SpeakeasyBase {
    queryParams: GetDescribePartnersQueryParams;
    headers: GetDescribePartnersHeaders;
}
export declare class GetDescribePartnersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
