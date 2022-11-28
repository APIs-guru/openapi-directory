import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsGetArchiveForAuthenticatedUserPathParams extends SpeakeasyBase {
    migrationId: number;
}
export declare class MigrationsGetArchiveForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: MigrationsGetArchiveForAuthenticatedUserPathParams;
}
export declare class MigrationsGetArchiveForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
