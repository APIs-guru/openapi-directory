import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryInfo } from "./queryinfo";



export class DescribeQueriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=queries", elemType: QueryInfo })
  queries?: QueryInfo[];
}
