import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsDeleteArchiveForOrgPathParams extends SpeakeasyBase {
    migrationId: number;
    org: string;
}
export declare class MigrationsDeleteArchiveForOrgRequest extends SpeakeasyBase {
    pathParams: MigrationsDeleteArchiveForOrgPathParams;
}
export declare class MigrationsDeleteArchiveForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
