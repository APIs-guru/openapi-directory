import { SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryStatusEnum } from "./querystatusenum";
/**
 * Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation.
**/
export declare class QueryInfo extends SpeakeasyBase {
    createTime?: number;
    logGroupName?: string;
    queryId?: string;
    queryString?: string;
    status?: QueryStatusEnum;
}
