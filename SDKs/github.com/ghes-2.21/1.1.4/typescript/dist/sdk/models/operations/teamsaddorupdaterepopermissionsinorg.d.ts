import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsAddOrUpdateRepoPermissionsInOrgPathParams extends SpeakeasyBase {
    org: string;
    owner: string;
    repo: string;
    teamSlug: string;
}
export declare enum TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin",
    Maintain = "maintain",
    Triage = "triage"
}
export declare class TeamsAddOrUpdateRepoPermissionsInOrgRequestBody extends SpeakeasyBase {
    permission?: TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateRepoPermissionsInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsAddOrUpdateRepoPermissionsInOrgPathParams;
    request?: TeamsAddOrUpdateRepoPermissionsInOrgRequestBody;
}
export declare class TeamsAddOrUpdateRepoPermissionsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
