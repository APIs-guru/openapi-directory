import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsGetStatusForAuthenticatedUserPathParams extends SpeakeasyBase {
    migrationId: number;
}
export declare class MigrationsGetStatusForAuthenticatedUserQueryParams extends SpeakeasyBase {
    exclude?: string[];
}
export declare class MigrationsGetStatusForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: MigrationsGetStatusForAuthenticatedUserPathParams;
    queryParams: MigrationsGetStatusForAuthenticatedUserQueryParams;
}
export declare class MigrationsGetStatusForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    migration?: shared.Migration;
}
