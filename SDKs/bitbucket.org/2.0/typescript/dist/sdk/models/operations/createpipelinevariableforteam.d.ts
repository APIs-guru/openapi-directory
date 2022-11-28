import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePipelineVariableForTeamPathParams extends SpeakeasyBase {
    username: string;
}
export declare class CreatePipelineVariableForTeamQueryParams extends SpeakeasyBase {
    workspace: string;
}
export declare class CreatePipelineVariableForTeamRequest extends SpeakeasyBase {
    pathParams: CreatePipelineVariableForTeamPathParams;
    queryParams: CreatePipelineVariableForTeamQueryParams;
    request?: Map<string, any>;
}
export declare class CreatePipelineVariableForTeamResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    pipelineVariable?: Map<string, any>;
}
