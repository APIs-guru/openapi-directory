import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CanaryTimeline
/** 
 * This structure contains information about when the canary was created and modified.
**/
export class CanaryTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastStarted" })
  lastStarted?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastStopped" })
  lastStopped?: Date;
}
