import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRepositoryBuildNumberPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class UpdateRepositoryBuildNumberRequest extends SpeakeasyBase {
    pathParams: UpdateRepositoryBuildNumberPathParams;
    request: Map<string, any>;
}
export declare class UpdateRepositoryBuildNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineBuildNumber?: Map<string, any>;
}
