import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePipelineVariableForUserPathParams extends SpeakeasyBase {
    selectedUser: string;
}
export declare class CreatePipelineVariableForUserRequest extends SpeakeasyBase {
    pathParams: CreatePipelineVariableForUserPathParams;
    request?: Map<string, any>;
}
export declare class CreatePipelineVariableForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    pipelineVariable?: Map<string, any>;
}
