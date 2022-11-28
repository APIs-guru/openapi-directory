import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
    knownHostUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
    pathParams: GetRepositoryPipelineKnownHostPathParams;
}
export declare class GetRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineKnownHost?: Map<string, any>;
}
