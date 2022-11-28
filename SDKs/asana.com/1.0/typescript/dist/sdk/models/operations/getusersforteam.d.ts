import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersForTeamPathParams extends SpeakeasyBase {
    teamGid: string;
}
export declare class GetUsersForTeamQueryParams extends SpeakeasyBase {
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetUsersForTeam200ApplicationJson extends SpeakeasyBase {
    data?: shared.UserCompact[];
}
export declare class GetUsersForTeamRequest extends SpeakeasyBase {
    pathParams: GetUsersForTeamPathParams;
    queryParams: GetUsersForTeamQueryParams;
}
export declare class GetUsersForTeamResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getUsersForTeam200ApplicationJsonObject?: GetUsersForTeam200ApplicationJson;
}
