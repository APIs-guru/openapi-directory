import { SpeakeasyBase } from "../../../internal/utils";
import { SqlParameter } from "./sqlparameter";
import { StatusStringEnum } from "./statusstringenum";
/**
 * The SQL statement to run.
**/
export declare class StatementData extends SpeakeasyBase {
    createdAt?: Date;
    id: string;
    isBatchStatement?: boolean;
    queryParameters?: SqlParameter[];
    queryString?: string;
    queryStrings?: string[];
    secretArn?: string;
    statementName?: string;
    status?: StatusStringEnum;
    updatedAt?: Date;
}
