import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyClusterIamRolesActionEnum {
    ModifyClusterIamRoles = "ModifyClusterIamRoles"
}
export declare enum GetModifyClusterIamRolesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifyClusterIamRolesQueryParams extends SpeakeasyBase {
    action: GetModifyClusterIamRolesActionEnum;
    addIamRoles?: string[];
    clusterIdentifier: string;
    removeIamRoles?: string[];
    version: GetModifyClusterIamRolesVersionEnum;
}
export declare class GetModifyClusterIamRolesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyClusterIamRolesRequest extends SpeakeasyBase {
    queryParams: GetModifyClusterIamRolesQueryParams;
    headers: GetModifyClusterIamRolesHeaders;
}
export declare class GetModifyClusterIamRolesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
