import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateEnvironmentForRepositoryPathParams extends SpeakeasyBase {
    environmentUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class UpdateEnvironmentForRepositoryRequest extends SpeakeasyBase {
    pathParams: UpdateEnvironmentForRepositoryPathParams;
}
export declare class UpdateEnvironmentForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
