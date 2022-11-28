import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteEnvironmentForRepositoryPathParams extends SpeakeasyBase {
    environmentUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteEnvironmentForRepositoryRequest extends SpeakeasyBase {
    pathParams: DeleteEnvironmentForRepositoryPathParams;
}
export declare class DeleteEnvironmentForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
