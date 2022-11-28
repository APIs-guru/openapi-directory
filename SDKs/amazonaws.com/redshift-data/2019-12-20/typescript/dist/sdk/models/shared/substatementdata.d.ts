import { SpeakeasyBase } from "../../../internal/utils";
import { StatementStatusStringEnum } from "./statementstatusstringenum";
/**
 * Information about an SQL statement.
**/
export declare class SubStatementData extends SpeakeasyBase {
    createdAt?: Date;
    duration?: number;
    error?: string;
    hasResultSet?: boolean;
    id: string;
    queryString?: string;
    redshiftQueryId?: number;
    resultRows?: number;
    resultSize?: number;
    status?: StatementStatusStringEnum;
    updatedAt?: Date;
}
