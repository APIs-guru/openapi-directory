import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsAddOrUpdateProjectPermissionsInOrgPathParams extends SpeakeasyBase {
    org: string;
    projectId: number;
    teamSlug: string;
}
export declare enum TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateProjectPermissionsInOrgRequestBody extends SpeakeasyBase {
    permission?: TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class TeamsAddOrUpdateProjectPermissionsInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsAddOrUpdateProjectPermissionsInOrgPathParams;
    request?: TeamsAddOrUpdateProjectPermissionsInOrgRequestBody;
}
export declare class TeamsAddOrUpdateProjectPermissionsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamsAddOrUpdateProjectPermissionsInOrg403ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson;
}
