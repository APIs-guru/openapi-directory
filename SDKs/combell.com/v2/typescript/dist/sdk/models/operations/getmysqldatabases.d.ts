import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMySqlDatabasesQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetMySqlDatabasesRequest extends SpeakeasyBase {
    queryParams: GetMySqlDatabasesQueryParams;
}
export declare class GetMySqlDatabasesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    mySqlDatabases?: shared.MySqlDatabase[];
    statusCode: number;
}
