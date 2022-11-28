import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutomatedDiscoveryInformation
/** 
 * Describes automated discovery.
**/
export class AutomatedDiscoveryInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastRunTime" })
  lastRunTime?: Date;
}
