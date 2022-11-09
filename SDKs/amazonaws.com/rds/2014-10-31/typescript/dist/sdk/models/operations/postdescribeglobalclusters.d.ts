import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeGlobalClustersActionEnum {
    DescribeGlobalClusters = "DescribeGlobalClusters"
}
export declare enum PostDescribeGlobalClustersVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeGlobalClustersQueryParams extends SpeakeasyBase {
    action: PostDescribeGlobalClustersActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeGlobalClustersVersionEnum;
}
export declare class PostDescribeGlobalClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeGlobalClustersRequest extends SpeakeasyBase {
    queryParams: PostDescribeGlobalClustersQueryParams;
    headers: PostDescribeGlobalClustersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeGlobalClustersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
