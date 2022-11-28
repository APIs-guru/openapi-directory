import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPipelineVariableForUserPathParams extends SpeakeasyBase {
    selectedUser: string;
    variableUuid: string;
}
export declare class GetPipelineVariableForUserRequest extends SpeakeasyBase {
    pathParams: GetPipelineVariableForUserPathParams;
}
export declare class GetPipelineVariableForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineVariable?: Map<string, any>;
}
