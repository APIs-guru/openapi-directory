import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetBacktrackDbClusterActionEnum {
    BacktrackDbCluster = "BacktrackDBCluster"
}
export declare enum GetBacktrackDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetBacktrackDbClusterQueryParams extends SpeakeasyBase {
    action: GetBacktrackDbClusterActionEnum;
    backtrackTo: Date;
    dbClusterIdentifier: string;
    force?: boolean;
    useEarliestTimeOnPointInTimeUnavailable?: boolean;
    version: GetBacktrackDbClusterVersionEnum;
}
export declare class GetBacktrackDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBacktrackDbClusterRequest extends SpeakeasyBase {
    queryParams: GetBacktrackDbClusterQueryParams;
    headers: GetBacktrackDbClusterHeaders;
}
export declare class GetBacktrackDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
