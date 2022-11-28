import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsListReposForOrgPathParams extends SpeakeasyBase {
    migrationId: number;
    org: string;
}
export declare class MigrationsListReposForOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class MigrationsListReposForOrgRequest extends SpeakeasyBase {
    pathParams: MigrationsListReposForOrgPathParams;
    queryParams: MigrationsListReposForOrgQueryParams;
}
export declare class MigrationsListReposForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    minimalRepositories?: shared.MinimalRepository[];
}
