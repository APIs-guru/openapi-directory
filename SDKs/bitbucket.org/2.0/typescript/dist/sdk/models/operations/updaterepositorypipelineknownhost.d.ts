import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
    knownHostUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class UpdateRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
    pathParams: UpdateRepositoryPipelineKnownHostPathParams;
    request: Map<string, any>;
}
export declare class UpdateRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineKnownHost?: Map<string, any>;
}
