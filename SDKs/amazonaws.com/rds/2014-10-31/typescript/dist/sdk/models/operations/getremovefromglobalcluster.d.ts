import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRemoveFromGlobalClusterActionEnum {
    RemoveFromGlobalCluster = "RemoveFromGlobalCluster"
}
export declare enum GetRemoveFromGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetRemoveFromGlobalClusterQueryParams extends SpeakeasyBase {
    action: GetRemoveFromGlobalClusterActionEnum;
    dbClusterIdentifier?: string;
    globalClusterIdentifier?: string;
    version: GetRemoveFromGlobalClusterVersionEnum;
}
export declare class GetRemoveFromGlobalClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRemoveFromGlobalClusterRequest extends SpeakeasyBase {
    queryParams: GetRemoveFromGlobalClusterQueryParams;
    headers: GetRemoveFromGlobalClusterHeaders;
}
export declare class GetRemoveFromGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
