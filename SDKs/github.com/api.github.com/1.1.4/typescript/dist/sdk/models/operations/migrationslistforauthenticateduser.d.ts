import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsListForAuthenticatedUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class MigrationsListForAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: MigrationsListForAuthenticatedUserQueryParams;
}
export declare class MigrationsListForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    migrations?: shared.Migration[];
}
