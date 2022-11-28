import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsAddOrUpdateProjectPermissionsPathParams extends SpeakeasyBase {
    projectId: number;
    teamId: number;
}
export declare class TeamsAddOrUpdateProjectPermissionsHeaders extends SpeakeasyBase {
    accept: string;
}
export declare enum TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateProjectPermissionsRequestBody extends SpeakeasyBase {
    permission?: TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateProjectPermissions403ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class TeamsAddOrUpdateProjectPermissionsRequest extends SpeakeasyBase {
    pathParams: TeamsAddOrUpdateProjectPermissionsPathParams;
    headers: TeamsAddOrUpdateProjectPermissionsHeaders;
    request?: TeamsAddOrUpdateProjectPermissionsRequestBody;
}
export declare class TeamsAddOrUpdateProjectPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamsAddOrUpdateProjectPermissions403ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissions403ApplicationJson;
}
