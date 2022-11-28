import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeOrderableClusterOptionsActionEnum {
    DescribeOrderableClusterOptions = "DescribeOrderableClusterOptions"
}
export declare enum PostDescribeOrderableClusterOptionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeOrderableClusterOptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeOrderableClusterOptionsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeOrderableClusterOptionsVersionEnum;
}
export declare class PostDescribeOrderableClusterOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeOrderableClusterOptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeOrderableClusterOptionsQueryParams;
    headers: PostDescribeOrderableClusterOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeOrderableClusterOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
