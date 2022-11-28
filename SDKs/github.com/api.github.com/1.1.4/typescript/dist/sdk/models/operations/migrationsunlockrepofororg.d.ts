import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsUnlockRepoForOrgPathParams extends SpeakeasyBase {
    migrationId: number;
    org: string;
    repoName: string;
}
export declare class MigrationsUnlockRepoForOrgRequest extends SpeakeasyBase {
    pathParams: MigrationsUnlockRepoForOrgPathParams;
}
export declare class MigrationsUnlockRepoForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
