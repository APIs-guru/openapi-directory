import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetResumeClusterActionEnum {
    ResumeCluster = "ResumeCluster"
}
export declare enum GetResumeClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetResumeClusterQueryParams extends SpeakeasyBase {
    action: GetResumeClusterActionEnum;
    clusterIdentifier: string;
    version: GetResumeClusterVersionEnum;
}
export declare class GetResumeClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResumeClusterRequest extends SpeakeasyBase {
    queryParams: GetResumeClusterQueryParams;
    headers: GetResumeClusterHeaders;
}
export declare class GetResumeClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
