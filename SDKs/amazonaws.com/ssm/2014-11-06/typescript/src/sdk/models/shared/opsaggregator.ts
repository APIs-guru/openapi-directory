import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsAggregator } from "./opsaggregator";
import { OpsFilter } from "./opsfilter";


// OpsAggregator
/** 
 * One or more aggregators for viewing counts of OpsData using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few.
**/
export class OpsAggregator extends SpeakeasyBase {
  @Metadata({ data: "json, name=AggregatorType" })
  aggregatorType?: string;

  @Metadata({ data: "json, name=Aggregators", elemType: shared.OpsAggregator })
  aggregators?: OpsAggregator[];

  @Metadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=Filters", elemType: shared.OpsFilter })
  filters?: OpsFilter[];

  @Metadata({ data: "json, name=TypeName" })
  typeName?: string;

  @Metadata({ data: "json, name=Values" })
  values?: Map<string, string>;
}
