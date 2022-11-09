import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightsConfiguration } from "./insightsconfiguration";


// GroupSummary
/** 
 * Details for a group without metadata.
**/
export class GroupSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=FilterExpression" })
  filterExpression?: string;

  @Metadata({ data: "json, name=GroupARN" })
  groupArn?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;

  @Metadata({ data: "json, name=InsightsConfiguration" })
  insightsConfiguration?: InsightsConfiguration;
}
