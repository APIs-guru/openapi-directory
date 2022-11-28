import { SpeakeasyBase } from "../../../internal/utils";
export declare class BatchExecuteStatementInput extends SpeakeasyBase {
    clusterIdentifier: string;
    database: string;
    dbUser?: string;
    secretArn?: string;
    sqls: string[];
    statementName?: string;
    withEvent?: boolean;
}
