import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePipelineVariableForUserPathParams extends SpeakeasyBase {
    selectedUser: string;
    variableUuid: string;
}
export declare class DeletePipelineVariableForUserRequest extends SpeakeasyBase {
    pathParams: DeletePipelineVariableForUserPathParams;
}
export declare class DeletePipelineVariableForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
