import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePipelineForRepositoryPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class CreatePipelineForRepositoryRequest extends SpeakeasyBase {
    pathParams: CreatePipelineForRepositoryPathParams;
    request: Map<string, any>;
}
export declare class CreatePipelineForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    pipeline?: Map<string, any>;
}
