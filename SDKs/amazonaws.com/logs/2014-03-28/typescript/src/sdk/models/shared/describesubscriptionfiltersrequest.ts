import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSubscriptionFiltersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterNamePrefix" })
  filterNamePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
