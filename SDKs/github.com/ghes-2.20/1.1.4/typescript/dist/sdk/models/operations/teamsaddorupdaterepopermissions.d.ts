import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsAddOrUpdateRepoPermissionsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    teamId: number;
}
export declare enum TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateRepoPermissionsRequestBody extends SpeakeasyBase {
    permission?: TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateRepoPermissionsRequest extends SpeakeasyBase {
    pathParams: TeamsAddOrUpdateRepoPermissionsPathParams;
    request?: TeamsAddOrUpdateRepoPermissionsRequestBody;
}
export declare class TeamsAddOrUpdateRepoPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
