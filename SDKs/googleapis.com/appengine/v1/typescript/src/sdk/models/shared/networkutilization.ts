import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkUtilization
/** 
 * Target scaling by network usage. Only applicable in the App Engine flexible environment.
**/
export class NetworkUtilization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetReceivedBytesPerSecond" })
  targetReceivedBytesPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=targetReceivedPacketsPerSecond" })
  targetReceivedPacketsPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=targetSentBytesPerSecond" })
  targetSentBytesPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=targetSentPacketsPerSecond" })
  targetSentPacketsPerSecond?: number;
}
