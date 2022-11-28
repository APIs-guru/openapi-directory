import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCheckPermissionsForProjectLegacyPathParams extends SpeakeasyBase {
    projectId: number;
    teamId: number;
}
export declare class TeamsCheckPermissionsForProjectLegacy415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class TeamsCheckPermissionsForProjectLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsCheckPermissionsForProjectLegacyPathParams;
}
export declare class TeamsCheckPermissionsForProjectLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamProject?: shared.TeamProject;
    teamsCheckPermissionsForProjectLegacy415ApplicationJsonObject?: TeamsCheckPermissionsForProjectLegacy415ApplicationJson;
}
