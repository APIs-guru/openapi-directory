import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum {
    Repositories = "repositories"
}
export declare class MigrationsStartForAuthenticatedUserRequestBody extends SpeakeasyBase {
    exclude?: MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum[];
    excludeAttachments?: boolean;
    lockRepositories?: boolean;
    repositories: string[];
}
export declare class MigrationsStartForAuthenticatedUserRequest extends SpeakeasyBase {
    request?: MigrationsStartForAuthenticatedUserRequestBody;
}
export declare class MigrationsStartForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    migration?: shared.Migration;
    validationError?: shared.ValidationError;
}
