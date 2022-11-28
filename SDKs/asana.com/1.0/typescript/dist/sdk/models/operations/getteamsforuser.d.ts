import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsForUserPathParams extends SpeakeasyBase {
    userGid: string;
}
export declare class GetTeamsForUserQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    organization: string;
}
export declare class GetTeamsForUser200ApplicationJson extends SpeakeasyBase {
    data?: shared.TeamCompact[];
}
export declare class GetTeamsForUserRequest extends SpeakeasyBase {
    pathParams: GetTeamsForUserPathParams;
    queryParams: GetTeamsForUserQueryParams;
}
export declare class GetTeamsForUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTeamsForUser200ApplicationJsonObject?: GetTeamsForUser200ApplicationJson;
}
