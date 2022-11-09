import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SqlParameter } from "./sqlparameter";
export declare class ExecuteStatementInput extends SpeakeasyBase {
    clusterIdentifier: string;
    database: string;
    dbUser?: string;
    parameters?: SqlParameter[];
    secretArn?: string;
    sql: string;
    statementName?: string;
    withEvent?: boolean;
}
