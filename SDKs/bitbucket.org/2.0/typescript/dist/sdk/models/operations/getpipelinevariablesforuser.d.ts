import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPipelineVariablesForUserPathParams extends SpeakeasyBase {
    selectedUser: string;
}
export declare class GetPipelineVariablesForUserRequest extends SpeakeasyBase {
    pathParams: GetPipelineVariablesForUserPathParams;
}
export declare class GetPipelineVariablesForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
