import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEnvironmentForRepositoryPathParams extends SpeakeasyBase {
    environmentUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetEnvironmentForRepositoryRequest extends SpeakeasyBase {
    pathParams: GetEnvironmentForRepositoryPathParams;
}
export declare class GetEnvironmentForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deploymentEnvironment?: Map<string, any>;
    error?: Map<string, any>;
}
