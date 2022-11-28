import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamMembershipPathParams extends SpeakeasyBase {
    teamMembershipGid: string;
}
export declare class GetTeamMembershipQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTeamMembership200ApplicationJson extends SpeakeasyBase {
    data?: shared.TeamMembershipResponse;
}
export declare class GetTeamMembershipRequest extends SpeakeasyBase {
    pathParams: GetTeamMembershipPathParams;
    queryParams: GetTeamMembershipQueryParams;
}
export declare class GetTeamMembershipResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTeamMembership200ApplicationJsonObject?: GetTeamMembership200ApplicationJson;
}
