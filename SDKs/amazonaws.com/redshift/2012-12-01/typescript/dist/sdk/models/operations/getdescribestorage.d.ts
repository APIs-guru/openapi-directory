import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeStorageActionEnum {
    DescribeStorage = "DescribeStorage"
}
export declare enum GetDescribeStorageVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeStorageQueryParams extends SpeakeasyBase {
    action: GetDescribeStorageActionEnum;
    version: GetDescribeStorageVersionEnum;
}
export declare class GetDescribeStorageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeStorageRequest extends SpeakeasyBase {
    queryParams: GetDescribeStorageQueryParams;
    headers: GetDescribeStorageHeaders;
}
export declare class GetDescribeStorageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
