import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbEngineVersionsActionEnum {
    DescribeDbEngineVersions = "DescribeDBEngineVersions"
}
export declare enum PostDescribeDbEngineVersionsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeDbEngineVersionsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbEngineVersionsActionEnum;
    version: PostDescribeDbEngineVersionsVersionEnum;
}
export declare class PostDescribeDbEngineVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbEngineVersionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbEngineVersionsQueryParams;
    headers: PostDescribeDbEngineVersionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbEngineVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
