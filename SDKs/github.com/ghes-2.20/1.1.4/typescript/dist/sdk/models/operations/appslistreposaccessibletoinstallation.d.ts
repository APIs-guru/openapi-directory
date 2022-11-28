import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsListReposAccessibleToInstallationQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class AppsListReposAccessibleToInstallationHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class AppsListReposAccessibleToInstallation200ApplicationJson extends SpeakeasyBase {
    repositories: shared.Repository[];
    repositorySelection?: string;
    totalCount: number;
}
export declare class AppsListReposAccessibleToInstallationRequest extends SpeakeasyBase {
    queryParams: AppsListReposAccessibleToInstallationQueryParams;
    headers: AppsListReposAccessibleToInstallationHeaders;
}
export declare class AppsListReposAccessibleToInstallationResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    appsListReposAccessibleToInstallation200ApplicationJsonObject?: AppsListReposAccessibleToInstallation200ApplicationJson;
    basicError?: shared.BasicError;
}
