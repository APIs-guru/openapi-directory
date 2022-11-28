import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPipelineVariableForTeamPathParams extends SpeakeasyBase {
    username: string;
    variableUuid: string;
}
export declare class GetPipelineVariableForTeamRequest extends SpeakeasyBase {
    pathParams: GetPipelineVariableForTeamPathParams;
}
export declare class GetPipelineVariableForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineVariable?: Map<string, any>;
}
