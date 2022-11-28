import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsAddOrUpdateProjectPermissionsLegacyPathParams extends SpeakeasyBase {
    projectId: number;
    teamId: number;
}
export declare enum TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateProjectPermissionsLegacyRequestBody extends SpeakeasyBase {
    permission?: TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class TeamsAddOrUpdateProjectPermissionsLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsAddOrUpdateProjectPermissionsLegacyPathParams;
    request?: TeamsAddOrUpdateProjectPermissionsLegacyRequestBody;
}
export declare class TeamsAddOrUpdateProjectPermissionsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson;
    teamsAddOrUpdateProjectPermissionsLegacy415ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson;
    validationError?: shared.ValidationError;
}
