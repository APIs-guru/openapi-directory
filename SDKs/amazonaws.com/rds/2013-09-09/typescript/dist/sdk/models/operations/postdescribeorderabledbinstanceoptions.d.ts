import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeOrderableDbInstanceOptionsActionEnum {
    DescribeOrderableDbInstanceOptions = "DescribeOrderableDBInstanceOptions"
}
export declare enum PostDescribeOrderableDbInstanceOptionsVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class PostDescribeOrderableDbInstanceOptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeOrderableDbInstanceOptionsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeOrderableDbInstanceOptionsVersionEnum;
}
export declare class PostDescribeOrderableDbInstanceOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeOrderableDbInstanceOptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeOrderableDbInstanceOptionsQueryParams;
    headers: PostDescribeOrderableDbInstanceOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeOrderableDbInstanceOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
