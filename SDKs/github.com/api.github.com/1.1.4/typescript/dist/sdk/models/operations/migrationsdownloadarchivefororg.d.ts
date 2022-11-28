import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsDownloadArchiveForOrgPathParams extends SpeakeasyBase {
    migrationId: number;
    org: string;
}
export declare class MigrationsDownloadArchiveForOrgRequest extends SpeakeasyBase {
    pathParams: MigrationsDownloadArchiveForOrgPathParams;
}
export declare class MigrationsDownloadArchiveForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
