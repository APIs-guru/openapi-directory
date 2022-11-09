import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbClusterBacktracksActionEnum {
    DescribeDbClusterBacktracks = "DescribeDBClusterBacktracks"
}
export declare enum PostDescribeDbClusterBacktracksVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbClusterBacktracksQueryParams extends SpeakeasyBase {
    action: PostDescribeDbClusterBacktracksActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbClusterBacktracksVersionEnum;
}
export declare class PostDescribeDbClusterBacktracksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbClusterBacktracksRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbClusterBacktracksQueryParams;
    headers: PostDescribeDbClusterBacktracksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbClusterBacktracksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
