import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsAggregator } from "./opsaggregator";
import { OpsFilter } from "./opsfilter";
import { OpsResultAttribute } from "./opsresultattribute";


export class GetOpsSummaryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aggregators", elemType: shared.OpsAggregator })
  aggregators?: OpsAggregator[];

  @Metadata({ data: "json, name=Filters", elemType: shared.OpsFilter })
  filters?: OpsFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResultAttributes", elemType: shared.OpsResultAttribute })
  resultAttributes?: OpsResultAttribute[];

  @Metadata({ data: "json, name=SyncName" })
  syncName?: string;
}
