import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    BatchExecuteStatement(req: operations.BatchExecuteStatementRequest, config?: AxiosRequestConfig): Promise<operations.BatchExecuteStatementResponse>;
    CancelStatement(req: operations.CancelStatementRequest, config?: AxiosRequestConfig): Promise<operations.CancelStatementResponse>;
    DescribeStatement(req: operations.DescribeStatementRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStatementResponse>;
    DescribeTable(req: operations.DescribeTableRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTableResponse>;
    ExecuteStatement(req: operations.ExecuteStatementRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteStatementResponse>;
    GetStatementResult(req: operations.GetStatementResultRequest, config?: AxiosRequestConfig): Promise<operations.GetStatementResultResponse>;
    ListDatabases(req: operations.ListDatabasesRequest, config?: AxiosRequestConfig): Promise<operations.ListDatabasesResponse>;
    ListSchemas(req: operations.ListSchemasRequest, config?: AxiosRequestConfig): Promise<operations.ListSchemasResponse>;
    ListStatements(req: operations.ListStatementsRequest, config?: AxiosRequestConfig): Promise<operations.ListStatementsResponse>;
    ListTables(req: operations.ListTablesRequest, config?: AxiosRequestConfig): Promise<operations.ListTablesResponse>;
}
export {};
