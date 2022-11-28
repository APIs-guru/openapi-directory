import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabaseUsersPathParams extends SpeakeasyBase {
    databaseName: string;
}
export declare class GetDatabaseUsersQueryParams extends SpeakeasyBase {
    databaseName: string;
}
export declare class GetDatabaseUsersRequest extends SpeakeasyBase {
    pathParams: GetDatabaseUsersPathParams;
    queryParams: GetDatabaseUsersQueryParams;
}
export declare class GetDatabaseUsersResponse extends SpeakeasyBase {
    contentType: string;
    mySqlUsers?: shared.MySqlUser[];
    statusCode: number;
}
