import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveUserForTeamPathParams extends SpeakeasyBase {
    teamGid: string;
}
export declare class RemoveUserForTeamQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveUserForTeamRequestBody extends SpeakeasyBase {
    data?: shared.TeamRemoveUserRequest;
}
export declare class RemoveUserForTeam204ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveUserForTeamRequest extends SpeakeasyBase {
    pathParams: RemoveUserForTeamPathParams;
    queryParams: RemoveUserForTeamQueryParams;
    request: RemoveUserForTeamRequestBody;
}
export declare class RemoveUserForTeamResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeUserForTeam204ApplicationJsonObject?: RemoveUserForTeam204ApplicationJson;
}
