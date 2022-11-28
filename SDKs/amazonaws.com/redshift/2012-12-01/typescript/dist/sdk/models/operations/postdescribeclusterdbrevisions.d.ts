import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeClusterDbRevisionsActionEnum {
    DescribeClusterDbRevisions = "DescribeClusterDbRevisions"
}
export declare enum PostDescribeClusterDbRevisionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeClusterDbRevisionsQueryParams extends SpeakeasyBase {
    action: PostDescribeClusterDbRevisionsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeClusterDbRevisionsVersionEnum;
}
export declare class PostDescribeClusterDbRevisionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClusterDbRevisionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeClusterDbRevisionsQueryParams;
    headers: PostDescribeClusterDbRevisionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClusterDbRevisionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
