import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteGlobalClusterActionEnum {
    DeleteGlobalCluster = "DeleteGlobalCluster"
}
export declare enum GetDeleteGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeleteGlobalClusterQueryParams extends SpeakeasyBase {
    action: GetDeleteGlobalClusterActionEnum;
    globalClusterIdentifier: string;
    version: GetDeleteGlobalClusterVersionEnum;
}
export declare class GetDeleteGlobalClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteGlobalClusterRequest extends SpeakeasyBase {
    queryParams: GetDeleteGlobalClusterQueryParams;
    headers: GetDeleteGlobalClusterHeaders;
}
export declare class GetDeleteGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
