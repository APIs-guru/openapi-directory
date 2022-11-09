import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkUtilization
/** 
 * Target scaling by network usage. Only applicable in the App Engine flexible environment.
**/
export class NetworkUtilization extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetReceivedBytesPerSecond" })
  targetReceivedBytesPerSecond?: number;

  @Metadata({ data: "json, name=targetReceivedPacketsPerSecond" })
  targetReceivedPacketsPerSecond?: number;

  @Metadata({ data: "json, name=targetSentBytesPerSecond" })
  targetSentBytesPerSecond?: number;

  @Metadata({ data: "json, name=targetSentPacketsPerSecond" })
  targetSentPacketsPerSecond?: number;
}
