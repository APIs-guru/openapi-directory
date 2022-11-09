import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbProxyTargetsActionEnum {
    DescribeDbProxyTargets = "DescribeDBProxyTargets"
}
export declare enum PostDescribeDbProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbProxyTargetsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbProxyTargetsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbProxyTargetsVersionEnum;
}
export declare class PostDescribeDbProxyTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbProxyTargetsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbProxyTargetsQueryParams;
    headers: PostDescribeDbProxyTargetsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbProxyTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
