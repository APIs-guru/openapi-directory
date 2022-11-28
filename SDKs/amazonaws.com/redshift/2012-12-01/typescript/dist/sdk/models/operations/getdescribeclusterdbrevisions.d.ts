import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeClusterDbRevisionsActionEnum {
    DescribeClusterDbRevisions = "DescribeClusterDbRevisions"
}
export declare enum GetDescribeClusterDbRevisionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeClusterDbRevisionsQueryParams extends SpeakeasyBase {
    action: GetDescribeClusterDbRevisionsActionEnum;
    clusterIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeClusterDbRevisionsVersionEnum;
}
export declare class GetDescribeClusterDbRevisionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeClusterDbRevisionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeClusterDbRevisionsQueryParams;
    headers: GetDescribeClusterDbRevisionsHeaders;
}
export declare class GetDescribeClusterDbRevisionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
