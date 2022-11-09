import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QueryInfo } from "./queryinfo";


export class DescribeQueriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=queries", elemType: shared.QueryInfo })
  queries?: QueryInfo[];
}
