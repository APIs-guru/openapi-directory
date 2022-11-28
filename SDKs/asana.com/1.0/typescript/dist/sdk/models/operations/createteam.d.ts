import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTeamQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateTeamRequestBodyInput extends SpeakeasyBase {
    data?: shared.TeamRequestInput;
}
export declare class CreateTeam201ApplicationJson extends SpeakeasyBase {
    data?: shared.TeamResponse;
}
export declare class CreateTeamRequest extends SpeakeasyBase {
    queryParams: CreateTeamQueryParams;
    request: CreateTeamRequestBodyInput;
}
export declare class CreateTeamResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createTeam201ApplicationJsonObject?: CreateTeam201ApplicationJson;
}
