import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamMembershipsForUserPathParams extends SpeakeasyBase {
    userGid: string;
}
export declare class GetTeamMembershipsForUserQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    workspace: string;
}
export declare class GetTeamMembershipsForUser200ApplicationJson extends SpeakeasyBase {
    data?: shared.TeamMembershipCompact[];
}
export declare class GetTeamMembershipsForUserRequest extends SpeakeasyBase {
    pathParams: GetTeamMembershipsForUserPathParams;
    queryParams: GetTeamMembershipsForUserQueryParams;
}
export declare class GetTeamMembershipsForUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTeamMembershipsForUser200ApplicationJsonObject?: GetTeamMembershipsForUser200ApplicationJson;
}
