import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsItemFilter } from "./opsitemfilter";


export class DescribeOpsItemsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OpsItemFilters", elemType: shared.OpsItemFilter })
  opsItemFilters?: OpsItemFilter[];
}
