import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsAggregator } from "./opsaggregator";
import { OpsFilter } from "./opsfilter";
import { OpsResultAttribute } from "./opsresultattribute";



export class GetOpsSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aggregators", elemType: OpsAggregator })
  aggregators?: OpsAggregator[];

  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: OpsFilter })
  filters?: OpsFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResultAttributes", elemType: OpsResultAttribute })
  resultAttributes?: OpsResultAttribute[];

  @SpeakeasyMetadata({ data: "json, name=SyncName" })
  syncName?: string;
}
