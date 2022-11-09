import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeEndpointAccessActionEnum {
    DescribeEndpointAccess = "DescribeEndpointAccess"
}
export declare enum PostDescribeEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeEndpointAccessQueryParams extends SpeakeasyBase {
    action: PostDescribeEndpointAccessActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeEndpointAccessVersionEnum;
}
export declare class PostDescribeEndpointAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEndpointAccessRequest extends SpeakeasyBase {
    queryParams: PostDescribeEndpointAccessQueryParams;
    headers: PostDescribeEndpointAccessHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
