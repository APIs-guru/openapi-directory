import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbClusterParametersActionEnum {
    DescribeDbClusterParameters = "DescribeDBClusterParameters"
}
export declare enum PostDescribeDbClusterParametersVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbClusterParametersQueryParams extends SpeakeasyBase {
    action: PostDescribeDbClusterParametersActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbClusterParametersVersionEnum;
}
export declare class PostDescribeDbClusterParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbClusterParametersRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbClusterParametersQueryParams;
    headers: PostDescribeDbClusterParametersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbClusterParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
