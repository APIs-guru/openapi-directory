import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamMembershipsForTeamPathParams extends SpeakeasyBase {
    teamGid: string;
}
export declare class GetTeamMembershipsForTeamQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTeamMembershipsForTeam200ApplicationJson extends SpeakeasyBase {
    data?: shared.TeamMembershipCompact[];
}
export declare class GetTeamMembershipsForTeamRequest extends SpeakeasyBase {
    pathParams: GetTeamMembershipsForTeamPathParams;
    queryParams: GetTeamMembershipsForTeamQueryParams;
}
export declare class GetTeamMembershipsForTeamResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTeamMembershipsForTeam200ApplicationJsonObject?: GetTeamMembershipsForTeam200ApplicationJson;
}
