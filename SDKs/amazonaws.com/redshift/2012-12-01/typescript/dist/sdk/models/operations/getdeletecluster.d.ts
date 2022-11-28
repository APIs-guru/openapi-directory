import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteClusterActionEnum {
    DeleteCluster = "DeleteCluster"
}
export declare enum GetDeleteClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteClusterQueryParams extends SpeakeasyBase {
    action: GetDeleteClusterActionEnum;
    clusterIdentifier: string;
    finalClusterSnapshotIdentifier?: string;
    finalClusterSnapshotRetentionPeriod?: number;
    skipFinalClusterSnapshot?: boolean;
    version: GetDeleteClusterVersionEnum;
}
export declare class GetDeleteClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteClusterRequest extends SpeakeasyBase {
    queryParams: GetDeleteClusterQueryParams;
    headers: GetDeleteClusterHeaders;
}
export declare class GetDeleteClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
