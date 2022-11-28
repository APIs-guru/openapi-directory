import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCheckPermissionsForProjectInOrgPathParams extends SpeakeasyBase {
    org: string;
    projectId: number;
    teamSlug: string;
}
export declare class TeamsCheckPermissionsForProjectInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsCheckPermissionsForProjectInOrgPathParams;
}
export declare class TeamsCheckPermissionsForProjectInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamProject?: shared.TeamProject;
}
