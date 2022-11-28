import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribeActivationsFilter } from "./describeactivationsfilter";



export class DescribeActivationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: DescribeActivationsFilter })
  filters?: DescribeActivationsFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
