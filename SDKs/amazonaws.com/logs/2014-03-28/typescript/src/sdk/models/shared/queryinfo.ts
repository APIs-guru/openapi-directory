import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryStatusEnum } from "./querystatusenum";


// QueryInfo
/** 
 * Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation. 
**/
export class QueryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: number;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=queryId" })
  queryId?: string;

  @Metadata({ data: "json, name=queryString" })
  queryString?: string;

  @Metadata({ data: "json, name=status" })
  status?: QueryStatusEnum;
}
