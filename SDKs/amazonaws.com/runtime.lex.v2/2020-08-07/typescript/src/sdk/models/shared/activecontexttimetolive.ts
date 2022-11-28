import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActiveContextTimeToLive
/** 
 * The time that a context is active. You can specify the time to live in seconds or in conversation turns.
**/
export class ActiveContextTimeToLive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeToLiveInSeconds" })
  timeToLiveInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=turnsToLive" })
  turnsToLive: number;
}
