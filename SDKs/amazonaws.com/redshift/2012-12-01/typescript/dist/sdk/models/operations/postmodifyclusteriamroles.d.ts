import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyClusterIamRolesActionEnum {
    ModifyClusterIamRoles = "ModifyClusterIamRoles"
}
export declare enum PostModifyClusterIamRolesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyClusterIamRolesQueryParams extends SpeakeasyBase {
    action: PostModifyClusterIamRolesActionEnum;
    version: PostModifyClusterIamRolesVersionEnum;
}
export declare class PostModifyClusterIamRolesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyClusterIamRolesRequest extends SpeakeasyBase {
    queryParams: PostModifyClusterIamRolesQueryParams;
    headers: PostModifyClusterIamRolesHeaders;
    request?: Uint8Array;
}
export declare class PostModifyClusterIamRolesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
