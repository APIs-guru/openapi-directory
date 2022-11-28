import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDbClusterActionEnum {
    DeleteDbCluster = "DeleteDBCluster"
}
export declare enum GetDeleteDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeleteDbClusterQueryParams extends SpeakeasyBase {
    action: GetDeleteDbClusterActionEnum;
    dbClusterIdentifier: string;
    finalDbSnapshotIdentifier?: string;
    skipFinalSnapshot?: boolean;
    version: GetDeleteDbClusterVersionEnum;
}
export declare class GetDeleteDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbClusterRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbClusterQueryParams;
    headers: GetDeleteDbClusterHeaders;
}
export declare class GetDeleteDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
