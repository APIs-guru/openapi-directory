import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDbParametersActionEnum {
    DescribeDbParameters = "DescribeDBParameters"
}
export declare enum PostDescribeDbParametersVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeDbParametersQueryParams extends SpeakeasyBase {
    action: PostDescribeDbParametersActionEnum;
    version: PostDescribeDbParametersVersionEnum;
}
export declare class PostDescribeDbParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbParametersRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbParametersQueryParams;
    headers: PostDescribeDbParametersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
