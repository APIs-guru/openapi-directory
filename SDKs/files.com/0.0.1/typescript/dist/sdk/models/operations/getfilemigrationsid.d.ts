import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFileMigrationsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetFileMigrationsIdRequest extends SpeakeasyBase {
    pathParams: GetFileMigrationsIdPathParams;
}
export declare class GetFileMigrationsIdResponse extends SpeakeasyBase {
    contentType: string;
    fileMigrationEntity?: shared.FileMigrationEntity;
    statusCode: number;
}
