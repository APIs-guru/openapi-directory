import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CanaryTimeline
/** 
 * This structure contains information about when the canary was created and modified.
**/
export class CanaryTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=LastStarted" })
  lastStarted?: Date;

  @Metadata({ data: "json, name=LastStopped" })
  lastStopped?: Date;
}
