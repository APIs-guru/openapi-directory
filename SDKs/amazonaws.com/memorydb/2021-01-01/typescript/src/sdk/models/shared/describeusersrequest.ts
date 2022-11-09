import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";


export class DescribeUsersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
