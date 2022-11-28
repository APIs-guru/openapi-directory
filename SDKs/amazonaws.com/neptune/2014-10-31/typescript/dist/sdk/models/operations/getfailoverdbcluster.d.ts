import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetFailoverDbClusterActionEnum {
    FailoverDbCluster = "FailoverDBCluster"
}
export declare enum GetFailoverDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetFailoverDbClusterQueryParams extends SpeakeasyBase {
    action: GetFailoverDbClusterActionEnum;
    dbClusterIdentifier?: string;
    targetDbInstanceIdentifier?: string;
    version: GetFailoverDbClusterVersionEnum;
}
export declare class GetFailoverDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFailoverDbClusterRequest extends SpeakeasyBase {
    queryParams: GetFailoverDbClusterQueryParams;
    headers: GetFailoverDbClusterHeaders;
}
export declare class GetFailoverDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
