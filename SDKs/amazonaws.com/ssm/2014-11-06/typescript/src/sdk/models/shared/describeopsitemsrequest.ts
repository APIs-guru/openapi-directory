import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemFilter } from "./opsitemfilter";



export class DescribeOpsItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OpsItemFilters", elemType: OpsItemFilter })
  opsItemFilters?: OpsItemFilter[];
}
