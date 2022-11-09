import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutomatedDiscoveryInformation
/** 
 * Describes automated discovery.
**/
export class AutomatedDiscoveryInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastRunTime" })
  lastRunTime?: Date;
}
