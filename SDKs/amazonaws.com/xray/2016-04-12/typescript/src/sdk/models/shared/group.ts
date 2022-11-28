import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightsConfiguration } from "./insightsconfiguration";



// Group
/** 
 * Details and metadata for a group.
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FilterExpression" })
  filterExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupARN" })
  groupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=InsightsConfiguration" })
  insightsConfiguration?: InsightsConfiguration;
}
