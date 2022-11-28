import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddUserForTeamPathParams extends SpeakeasyBase {
    teamGid: string;
}
export declare class AddUserForTeamQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddUserForTeamRequestBody extends SpeakeasyBase {
    data?: shared.TeamAddUserRequest;
}
export declare class AddUserForTeam200ApplicationJson extends SpeakeasyBase {
    data?: shared.UserResponse;
}
export declare class AddUserForTeamRequest extends SpeakeasyBase {
    pathParams: AddUserForTeamPathParams;
    queryParams: AddUserForTeamQueryParams;
    request: AddUserForTeamRequestBody;
}
export declare class AddUserForTeamResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addUserForTeam200ApplicationJsonObject?: AddUserForTeam200ApplicationJson;
}
