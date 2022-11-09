import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetResizeClusterActionEnum {
    ResizeCluster = "ResizeCluster"
}
export declare enum GetResizeClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetResizeClusterQueryParams extends SpeakeasyBase {
    action: GetResizeClusterActionEnum;
    classic?: boolean;
    clusterIdentifier: string;
    clusterType?: string;
    nodeType?: string;
    numberOfNodes?: number;
    version: GetResizeClusterVersionEnum;
}
export declare class GetResizeClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResizeClusterRequest extends SpeakeasyBase {
    queryParams: GetResizeClusterQueryParams;
    headers: GetResizeClusterHeaders;
}
export declare class GetResizeClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
