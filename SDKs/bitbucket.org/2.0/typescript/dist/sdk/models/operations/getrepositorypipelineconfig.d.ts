import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRepositoryPipelineConfigPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoryPipelineConfigRequest extends SpeakeasyBase {
    pathParams: GetRepositoryPipelineConfigPathParams;
}
export declare class GetRepositoryPipelineConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pipelinesConfig?: Map<string, any>;
}
