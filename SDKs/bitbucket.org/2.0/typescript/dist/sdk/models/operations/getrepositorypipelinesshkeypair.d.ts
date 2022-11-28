import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRepositoryPipelineSshKeyPairPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoryPipelineSshKeyPairRequest extends SpeakeasyBase {
    pathParams: GetRepositoryPipelineSshKeyPairPathParams;
}
export declare class GetRepositoryPipelineSshKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineSshKeyPair?: Map<string, any>;
}
