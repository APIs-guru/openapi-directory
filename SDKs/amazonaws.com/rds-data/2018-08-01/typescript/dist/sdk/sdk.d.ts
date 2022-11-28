import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://rds-data.{region}.amazonaws.com", "https://rds-data.{region}.amazonaws.com", "http://rds-data.{region}.amazonaws.com.cn", "https://rds-data.{region}.amazonaws.com.cn"];
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
     * batchExecuteStatement - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important>
    **/
    batchExecuteStatement(req: operations.BatchExecuteStatementRequest, config?: AxiosRequestConfig): Promise<operations.BatchExecuteStatementResponse>;
    /**
     * beginTransaction - <p>Starts a SQL transaction.</p> <pre><code> &lt;important&gt; &lt;p&gt;A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.&lt;/p&gt; &lt;p&gt;A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.&lt;/p&gt; &lt;p&gt;DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate &lt;code&gt;ExecuteStatement&lt;/code&gt; call with &lt;code&gt;continueAfterTimeout&lt;/code&gt; enabled.&lt;/p&gt; &lt;/important&gt; </code></pre>
    **/
    beginTransaction(req: operations.BeginTransactionRequest, config?: AxiosRequestConfig): Promise<operations.BeginTransactionResponse>;
    /**
     * commitTransaction - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
    **/
    commitTransaction(req: operations.CommitTransactionRequest, config?: AxiosRequestConfig): Promise<operations.CommitTransactionResponse>;
    /**
     * executeSql - <p>Runs one or more SQL statements.</p> <important> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </important>
    **/
    executeSql(req: operations.ExecuteSqlRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteSqlResponse>;
    /**
     * executeStatement - <p>Runs a SQL statement against a database.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important> <p>The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated.</p>
    **/
    executeStatement(req: operations.ExecuteStatementRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteStatementResponse>;
    /**
     * rollbackTransaction - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
    **/
    rollbackTransaction(req: operations.RollbackTransactionRequest, config?: AxiosRequestConfig): Promise<operations.RollbackTransactionResponse>;
}
export {};
