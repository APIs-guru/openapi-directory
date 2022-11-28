import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCheckPermissionsForProjectPathParams extends SpeakeasyBase {
    projectId: number;
    teamId: number;
}
export declare class TeamsCheckPermissionsForProjectHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class TeamsCheckPermissionsForProjectRequest extends SpeakeasyBase {
    pathParams: TeamsCheckPermissionsForProjectPathParams;
    headers: TeamsCheckPermissionsForProjectHeaders;
}
export declare class TeamsCheckPermissionsForProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamProject?: shared.TeamProject;
}
