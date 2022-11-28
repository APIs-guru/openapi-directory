import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamMembershipsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    team?: string;
    user?: string;
    workspace?: string;
}
export declare class GetTeamMemberships200ApplicationJson extends SpeakeasyBase {
    data?: shared.TeamMembershipCompact[];
}
export declare class GetTeamMembershipsRequest extends SpeakeasyBase {
    queryParams: GetTeamMembershipsQueryParams;
}
export declare class GetTeamMembershipsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTeamMemberships200ApplicationJsonObject?: GetTeamMemberships200ApplicationJson;
}
