import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DescribeActivationsFilter } from "./describeactivationsfilter";


export class DescribeActivationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.DescribeActivationsFilter })
  filters?: DescribeActivationsFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
