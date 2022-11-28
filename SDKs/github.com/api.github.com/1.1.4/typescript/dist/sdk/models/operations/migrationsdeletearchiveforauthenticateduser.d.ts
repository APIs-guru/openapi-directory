import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsDeleteArchiveForAuthenticatedUserPathParams extends SpeakeasyBase {
    migrationId: number;
}
export declare class MigrationsDeleteArchiveForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: MigrationsDeleteArchiveForAuthenticatedUserPathParams;
}
export declare class MigrationsDeleteArchiveForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
