import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeClusterParametersActionEnum {
    DescribeClusterParameters = "DescribeClusterParameters"
}
export declare enum PostDescribeClusterParametersVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeClusterParametersQueryParams extends SpeakeasyBase {
    action: PostDescribeClusterParametersActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeClusterParametersVersionEnum;
}
export declare class PostDescribeClusterParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClusterParametersRequest extends SpeakeasyBase {
    queryParams: PostDescribeClusterParametersQueryParams;
    headers: PostDescribeClusterParametersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClusterParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
