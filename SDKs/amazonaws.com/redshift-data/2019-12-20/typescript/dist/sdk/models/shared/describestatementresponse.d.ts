import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SqlParameter } from "./sqlparameter";
import { StatusStringEnum } from "./statusstringenum";
import { SubStatementData } from "./substatementdata";
export declare class DescribeStatementResponse extends SpeakeasyBase {
    clusterIdentifier?: string;
    createdAt?: Date;
    database?: string;
    dbUser?: string;
    duration?: number;
    error?: string;
    hasResultSet?: boolean;
    id: string;
    queryParameters?: SqlParameter[];
    queryString?: string;
    redshiftPid?: number;
    redshiftQueryId?: number;
    resultRows?: number;
    resultSize?: number;
    secretArn?: string;
    status?: StatusStringEnum;
    subStatements?: SubStatementData[];
    updatedAt?: Date;
}
