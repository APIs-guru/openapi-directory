import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListProjectsPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListProjectsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListProjectsHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class TeamsListProjectsRequest extends SpeakeasyBase {
    pathParams: TeamsListProjectsPathParams;
    queryParams: TeamsListProjectsQueryParams;
    headers: TeamsListProjectsHeaders;
}
export declare class TeamsListProjectsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamProjects?: shared.TeamProject[];
}
