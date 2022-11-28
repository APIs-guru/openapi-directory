import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProjectForTeamPathParams extends SpeakeasyBase {
    teamGid: string;
}
export declare class CreateProjectForTeamQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateProjectForTeamRequestBodyInput extends SpeakeasyBase {
    data?: shared.ProjectRequestInput;
}
export declare class CreateProjectForTeam201ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectResponse;
}
export declare class CreateProjectForTeamRequest extends SpeakeasyBase {
    pathParams: CreateProjectForTeamPathParams;
    queryParams: CreateProjectForTeamQueryParams;
    request: CreateProjectForTeamRequestBodyInput;
}
export declare class CreateProjectForTeamResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createProjectForTeam201ApplicationJsonObject?: CreateProjectForTeam201ApplicationJson;
}
