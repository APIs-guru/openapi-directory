import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPipelineVariablesForWorkspacePathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class GetPipelineVariablesForWorkspaceRequest extends SpeakeasyBase {
    pathParams: GetPipelineVariablesForWorkspacePathParams;
}
export declare class GetPipelineVariablesForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
