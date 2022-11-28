import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListProjectsLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListProjectsLegacyQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListProjectsLegacy415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class TeamsListProjectsLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsListProjectsLegacyPathParams;
    queryParams: TeamsListProjectsLegacyQueryParams;
}
export declare class TeamsListProjectsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    teamProjects?: shared.TeamProject[];
    teamsListProjectsLegacy415ApplicationJsonObject?: TeamsListProjectsLegacy415ApplicationJson;
}
