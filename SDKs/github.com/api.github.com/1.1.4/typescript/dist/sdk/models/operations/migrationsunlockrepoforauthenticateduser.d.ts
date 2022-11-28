import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsUnlockRepoForAuthenticatedUserPathParams extends SpeakeasyBase {
    migrationId: number;
    repoName: string;
}
export declare class MigrationsUnlockRepoForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: MigrationsUnlockRepoForAuthenticatedUserPathParams;
}
export declare class MigrationsUnlockRepoForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
