import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDefaultClusterParametersActionEnum {
    DescribeDefaultClusterParameters = "DescribeDefaultClusterParameters"
}
export declare enum PostDescribeDefaultClusterParametersVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeDefaultClusterParametersQueryParams extends SpeakeasyBase {
    action: PostDescribeDefaultClusterParametersActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDefaultClusterParametersVersionEnum;
}
export declare class PostDescribeDefaultClusterParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDefaultClusterParametersRequest extends SpeakeasyBase {
    queryParams: PostDescribeDefaultClusterParametersQueryParams;
    headers: PostDescribeDefaultClusterParametersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDefaultClusterParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
