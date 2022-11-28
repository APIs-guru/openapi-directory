import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsListInstallationReposForAuthenticatedUserPathParams extends SpeakeasyBase {
    installationId: number;
}
export declare class AppsListInstallationReposForAuthenticatedUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class AppsListInstallationReposForAuthenticatedUserHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class AppsListInstallationReposForAuthenticatedUser200ApplicationJson extends SpeakeasyBase {
    repositories: shared.Repository[];
    repositorySelection?: string;
    totalCount: number;
}
export declare class AppsListInstallationReposForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: AppsListInstallationReposForAuthenticatedUserPathParams;
    queryParams: AppsListInstallationReposForAuthenticatedUserQueryParams;
    headers: AppsListInstallationReposForAuthenticatedUserHeaders;
}
export declare class AppsListInstallationReposForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    appsListInstallationReposForAuthenticatedUser200ApplicationJsonObject?: AppsListInstallationReposForAuthenticatedUser200ApplicationJson;
    basicError?: shared.BasicError;
}
