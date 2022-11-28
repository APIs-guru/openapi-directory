import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePipelineVariableForUserPathParams extends SpeakeasyBase {
    selectedUser: string;
    variableUuid: string;
}
export declare class UpdatePipelineVariableForUserRequest extends SpeakeasyBase {
    pathParams: UpdatePipelineVariableForUserPathParams;
    request: Map<string, any>;
}
export declare class UpdatePipelineVariableForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineVariable?: Map<string, any>;
}
