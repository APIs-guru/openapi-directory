import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsListReposForUserPathParams extends SpeakeasyBase {
    migrationId: number;
}
export declare class MigrationsListReposForUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class MigrationsListReposForUserRequest extends SpeakeasyBase {
    pathParams: MigrationsListReposForUserPathParams;
    queryParams: MigrationsListReposForUserQueryParams;
}
export declare class MigrationsListReposForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    minimalRepositories?: shared.MinimalRepository[];
}
