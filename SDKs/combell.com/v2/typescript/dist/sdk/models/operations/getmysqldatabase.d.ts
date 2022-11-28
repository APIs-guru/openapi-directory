import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMySqlDatabasePathParams extends SpeakeasyBase {
    databaseName: string;
}
export declare class GetMySqlDatabaseQueryParams extends SpeakeasyBase {
    databaseName: string;
}
export declare class GetMySqlDatabaseRequest extends SpeakeasyBase {
    pathParams: GetMySqlDatabasePathParams;
    queryParams: GetMySqlDatabaseQueryParams;
}
export declare class GetMySqlDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    mySqlDatabase?: shared.MySqlDatabase;
    statusCode: number;
}
