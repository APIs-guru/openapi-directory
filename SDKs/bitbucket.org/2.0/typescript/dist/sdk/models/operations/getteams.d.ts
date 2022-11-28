import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTeamsRoleEnum {
    Admin = "admin",
    Contributor = "contributor",
    Member = "member"
}
export declare class GetTeamsQueryParams extends SpeakeasyBase {
    role?: GetTeamsRoleEnum;
}
export declare class GetTeamsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsRequest extends SpeakeasyBase {
    queryParams: GetTeamsQueryParams;
    security: GetTeamsSecurity;
}
export declare class GetTeamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedTeams?: shared.PaginatedTeams;
}
