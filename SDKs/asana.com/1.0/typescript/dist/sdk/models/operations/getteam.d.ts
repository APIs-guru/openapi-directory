import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamPathParams extends SpeakeasyBase {
    teamGid: string;
}
export declare class GetTeamQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTeam200ApplicationJson extends SpeakeasyBase {
    data?: shared.TeamResponse;
}
export declare class GetTeamRequest extends SpeakeasyBase {
    pathParams: GetTeamPathParams;
    queryParams: GetTeamQueryParams;
}
export declare class GetTeamResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTeam200ApplicationJsonObject?: GetTeam200ApplicationJson;
}
