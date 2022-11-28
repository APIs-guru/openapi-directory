import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetStartDbClusterActionEnum {
    StartDbCluster = "StartDBCluster"
}
export declare enum GetStartDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetStartDbClusterQueryParams extends SpeakeasyBase {
    action: GetStartDbClusterActionEnum;
    dbClusterIdentifier: string;
    version: GetStartDbClusterVersionEnum;
}
export declare class GetStartDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStartDbClusterRequest extends SpeakeasyBase {
    queryParams: GetStartDbClusterQueryParams;
    headers: GetStartDbClusterHeaders;
}
export declare class GetStartDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
