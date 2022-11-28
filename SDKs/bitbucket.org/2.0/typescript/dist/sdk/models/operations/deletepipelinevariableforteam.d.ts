import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePipelineVariableForTeamPathParams extends SpeakeasyBase {
    username: string;
    variableUuid: string;
}
export declare class DeletePipelineVariableForTeamRequest extends SpeakeasyBase {
    pathParams: DeletePipelineVariableForTeamPathParams;
}
export declare class DeletePipelineVariableForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
