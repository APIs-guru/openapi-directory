import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRepositoryPipelineKeyPairPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoryPipelineKeyPairRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoryPipelineKeyPairPathParams;
}
export declare class DeleteRepositoryPipelineKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
