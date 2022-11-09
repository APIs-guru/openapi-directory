import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusStringEnum } from "./statusstringenum";
export declare class ListStatementsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    roleLevel?: boolean;
    statementName?: string;
    status?: StatusStringEnum;
}
