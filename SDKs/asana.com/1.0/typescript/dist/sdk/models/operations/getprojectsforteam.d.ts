import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectsForTeamPathParams extends SpeakeasyBase {
    teamGid: string;
}
export declare class GetProjectsForTeamQueryParams extends SpeakeasyBase {
    archived?: boolean;
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetProjectsForTeam200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectCompact[];
}
export declare class GetProjectsForTeamRequest extends SpeakeasyBase {
    pathParams: GetProjectsForTeamPathParams;
    queryParams: GetProjectsForTeamQueryParams;
}
export declare class GetProjectsForTeamResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getProjectsForTeam200ApplicationJsonObject?: GetProjectsForTeam200ApplicationJson;
}
