import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbClustersActionEnum {
    DescribeDbClusters = "DescribeDBClusters"
}
export declare enum PostDescribeDbClustersVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbClustersQueryParams extends SpeakeasyBase {
    action: PostDescribeDbClustersActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbClustersVersionEnum;
}
export declare class PostDescribeDbClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbClustersRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbClustersQueryParams;
    headers: PostDescribeDbClustersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbClustersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
