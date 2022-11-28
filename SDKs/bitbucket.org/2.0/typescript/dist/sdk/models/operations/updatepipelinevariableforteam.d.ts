import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePipelineVariableForTeamPathParams extends SpeakeasyBase {
    username: string;
    variableUuid: string;
}
export declare class UpdatePipelineVariableForTeamRequest extends SpeakeasyBase {
    pathParams: UpdatePipelineVariableForTeamPathParams;
    request: Map<string, any>;
}
export declare class UpdatePipelineVariableForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineVariable?: Map<string, any>;
}
