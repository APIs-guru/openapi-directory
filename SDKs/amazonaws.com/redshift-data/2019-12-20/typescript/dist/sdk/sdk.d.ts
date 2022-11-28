import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://redshift-data.{region}.amazonaws.com", "https://redshift-data.{region}.amazonaws.com", "http://redshift-data.{region}.amazonaws.com.cn", "https://redshift-data.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * batchExecuteStatement - <p>Runs one or more SQL statements, which can be data manipulation language (DML) or data definition language (DDL). Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. </p> </li> <li> <p>Temporary credentials - specify the cluster identifier, the database name, and the database user name. Permission to call the <code>redshift:GetClusterCredentials</code> operation is required to use this method. </p> </li> </ul>
    **/
    batchExecuteStatement(req: operations.BatchExecuteStatementRequest, config?: AxiosRequestConfig): Promise<operations.BatchExecuteStatementResponse>;
    /**
     * cancelStatement - Cancels a running query. To be canceled, a query must be running.
    **/
    cancelStatement(req: operations.CancelStatementRequest, config?: AxiosRequestConfig): Promise<operations.CancelStatementResponse>;
    /**
     * describeStatement - Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information includes when the query started, when it finished, the query status, the number of rows returned, and the SQL statement.
    **/
    describeStatement(req: operations.DescribeStatementRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStatementResponse>;
    /**
     * describeTable - <p>Describes the detailed information about a table from metadata in the cluster. The information includes its columns. A token is returned to page through the column list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. </p> </li> <li> <p>Temporary credentials - specify the cluster identifier, the database name, and the database user name. Permission to call the <code>redshift:GetClusterCredentials</code> operation is required to use this method. </p> </li> </ul>
    **/
    describeTable(req: operations.DescribeTableRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTableResponse>;
    /**
     * executeStatement - <p>Runs an SQL statement, which can be data manipulation language (DML) or data definition language (DDL). This statement must be a single SQL statement. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. </p> </li> <li> <p>Temporary credentials - specify the cluster identifier, the database name, and the database user name. Permission to call the <code>redshift:GetClusterCredentials</code> operation is required to use this method. </p> </li> </ul>
    **/
    executeStatement(req: operations.ExecuteStatementRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteStatementResponse>;
    /**
     * getStatementResult - Fetches the temporarily cached result of an SQL statement. A token is returned to page through the statement results.
    **/
    getStatementResult(req: operations.GetStatementResultRequest, config?: AxiosRequestConfig): Promise<operations.GetStatementResultResponse>;
    /**
     * listDatabases - <p>List the databases in a cluster. A token is returned to page through the database list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. </p> </li> <li> <p>Temporary credentials - specify the cluster identifier, the database name, and the database user name. Permission to call the <code>redshift:GetClusterCredentials</code> operation is required to use this method. </p> </li> </ul>
    **/
    listDatabases(req: operations.ListDatabasesRequest, config?: AxiosRequestConfig): Promise<operations.ListDatabasesResponse>;
    /**
     * listSchemas - <p>Lists the schemas in a database. A token is returned to page through the schema list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. </p> </li> <li> <p>Temporary credentials - specify the cluster identifier, the database name, and the database user name. Permission to call the <code>redshift:GetClusterCredentials</code> operation is required to use this method. </p> </li> </ul>
    **/
    listSchemas(req: operations.ListSchemasRequest, config?: AxiosRequestConfig): Promise<operations.ListSchemasResponse>;
    /**
     * listStatements - List of SQL statements. By default, only finished statements are shown. A token is returned to page through the statement list.
    **/
    listStatements(req: operations.ListStatementsRequest, config?: AxiosRequestConfig): Promise<operations.ListStatementsResponse>;
    /**
     * listTables - <p>List the tables in a database. If neither <code>SchemaPattern</code> nor <code>TablePattern</code> are specified, then all tables in the database are returned. A token is returned to page through the table list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. </p> </li> <li> <p>Temporary credentials - specify the cluster identifier, the database name, and the database user name. Permission to call the <code>redshift:GetClusterCredentials</code> operation is required to use this method. </p> </li> </ul>
    **/
    listTables(req: operations.ListTablesRequest, config?: AxiosRequestConfig): Promise<operations.ListTablesResponse>;
}
export {};
