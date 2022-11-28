import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeploymentForRepositoryPathParams extends SpeakeasyBase {
    deploymentUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetDeploymentForRepositoryRequest extends SpeakeasyBase {
    pathParams: GetDeploymentForRepositoryPathParams;
}
export declare class GetDeploymentForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deployment?: Map<string, any>;
    error?: Map<string, any>;
}
