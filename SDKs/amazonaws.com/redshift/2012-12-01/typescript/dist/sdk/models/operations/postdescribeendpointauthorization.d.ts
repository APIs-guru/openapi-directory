import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeEndpointAuthorizationActionEnum {
    DescribeEndpointAuthorization = "DescribeEndpointAuthorization"
}
export declare enum PostDescribeEndpointAuthorizationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeEndpointAuthorizationQueryParams extends SpeakeasyBase {
    action: PostDescribeEndpointAuthorizationActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeEndpointAuthorizationVersionEnum;
}
export declare class PostDescribeEndpointAuthorizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEndpointAuthorizationRequest extends SpeakeasyBase {
    queryParams: PostDescribeEndpointAuthorizationQueryParams;
    headers: PostDescribeEndpointAuthorizationHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEndpointAuthorizationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
