import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRepositoryPipelineKeyPairPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class UpdateRepositoryPipelineKeyPairRequest extends SpeakeasyBase {
    pathParams: UpdateRepositoryPipelineKeyPairPathParams;
    request: Map<string, any>;
}
export declare class UpdateRepositoryPipelineKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineSshKeyPair?: Map<string, any>;
}
