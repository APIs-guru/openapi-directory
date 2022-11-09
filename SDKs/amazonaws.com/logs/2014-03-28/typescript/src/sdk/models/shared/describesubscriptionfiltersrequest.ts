import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeSubscriptionFiltersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterNamePrefix" })
  filterNamePrefix?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
