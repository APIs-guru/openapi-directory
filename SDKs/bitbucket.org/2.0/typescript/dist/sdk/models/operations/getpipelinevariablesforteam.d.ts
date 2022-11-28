import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPipelineVariablesForTeamPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetPipelineVariablesForTeamQueryParams extends SpeakeasyBase {
    workspace: string;
}
export declare class GetPipelineVariablesForTeamRequest extends SpeakeasyBase {
    pathParams: GetPipelineVariablesForTeamPathParams;
    queryParams: GetPipelineVariablesForTeamQueryParams;
}
export declare class GetPipelineVariablesForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
