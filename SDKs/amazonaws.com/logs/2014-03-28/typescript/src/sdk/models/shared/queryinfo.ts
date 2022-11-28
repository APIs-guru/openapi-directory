import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryStatusEnum } from "./querystatusenum";



// QueryInfo
/** 
 * Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation. 
**/
export class QueryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: number;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=queryId" })
  queryId?: string;

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: QueryStatusEnum;
}
