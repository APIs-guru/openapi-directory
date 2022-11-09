import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyClusterDbRevisionActionEnum {
    ModifyClusterDbRevision = "ModifyClusterDbRevision"
}
export declare enum GetModifyClusterDbRevisionVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifyClusterDbRevisionQueryParams extends SpeakeasyBase {
    action: GetModifyClusterDbRevisionActionEnum;
    clusterIdentifier: string;
    revisionTarget: string;
    version: GetModifyClusterDbRevisionVersionEnum;
}
export declare class GetModifyClusterDbRevisionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyClusterDbRevisionRequest extends SpeakeasyBase {
    queryParams: GetModifyClusterDbRevisionQueryParams;
    headers: GetModifyClusterDbRevisionHeaders;
}
export declare class GetModifyClusterDbRevisionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
