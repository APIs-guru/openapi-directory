import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetPauseClusterActionEnum {
    PauseCluster = "PauseCluster"
}
export declare enum GetPauseClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetPauseClusterQueryParams extends SpeakeasyBase {
    action: GetPauseClusterActionEnum;
    clusterIdentifier: string;
    version: GetPauseClusterVersionEnum;
}
export declare class GetPauseClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPauseClusterRequest extends SpeakeasyBase {
    queryParams: GetPauseClusterQueryParams;
    headers: GetPauseClusterHeaders;
}
export declare class GetPauseClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
