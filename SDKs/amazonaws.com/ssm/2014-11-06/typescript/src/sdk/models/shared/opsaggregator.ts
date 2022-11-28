import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsFilter } from "./opsfilter";



// OpsAggregator
/** 
 * One or more aggregators for viewing counts of OpsData using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few.
**/
export class OpsAggregator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AggregatorType" })
  aggregatorType?: string;

  @SpeakeasyMetadata({ data: "json, name=Aggregators", elemType: OpsAggregator })
  aggregators?: OpsAggregator[];

  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: OpsFilter })
  filters?: OpsFilter[];

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: Map<string, string>;
}
