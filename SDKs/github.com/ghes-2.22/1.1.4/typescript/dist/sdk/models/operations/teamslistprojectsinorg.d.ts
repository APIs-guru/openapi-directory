import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListProjectsInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare class TeamsListProjectsInOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListProjectsInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsListProjectsInOrgPathParams;
    queryParams: TeamsListProjectsInOrgQueryParams;
}
export declare class TeamsListProjectsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamProjects?: shared.TeamProject[];
}
