import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
    knownHostUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoryPipelineKnownHostPathParams;
}
export declare class DeleteRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
