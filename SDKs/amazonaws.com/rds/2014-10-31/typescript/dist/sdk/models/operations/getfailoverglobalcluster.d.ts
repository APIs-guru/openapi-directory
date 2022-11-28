import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetFailoverGlobalClusterActionEnum {
    FailoverGlobalCluster = "FailoverGlobalCluster"
}
export declare enum GetFailoverGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetFailoverGlobalClusterQueryParams extends SpeakeasyBase {
    action: GetFailoverGlobalClusterActionEnum;
    globalClusterIdentifier: string;
    targetDbClusterIdentifier: string;
    version: GetFailoverGlobalClusterVersionEnum;
}
export declare class GetFailoverGlobalClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFailoverGlobalClusterRequest extends SpeakeasyBase {
    queryParams: GetFailoverGlobalClusterQueryParams;
    headers: GetFailoverGlobalClusterHeaders;
}
export declare class GetFailoverGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
