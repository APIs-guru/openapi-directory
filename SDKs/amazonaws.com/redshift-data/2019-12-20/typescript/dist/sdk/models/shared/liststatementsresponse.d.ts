import { SpeakeasyBase } from "../../../internal/utils";
import { StatementData } from "./statementdata";
export declare class ListStatementsResponse extends SpeakeasyBase {
    nextToken?: string;
    statements: StatementData[];
}
