import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class CreateRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
    pathParams: CreateRepositoryPipelineKnownHostPathParams;
    request: Map<string, any>;
}
export declare class CreateRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    pipelineKnownHost?: Map<string, any>;
}
