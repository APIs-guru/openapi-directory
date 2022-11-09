import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActiveContextTimeToLive
/** 
 * The time that a context is active. You can specify the time to live in seconds or in conversation turns.
**/
export class ActiveContextTimeToLive extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeToLiveInSeconds" })
  timeToLiveInSeconds: number;

  @Metadata({ data: "json, name=turnsToLive" })
  turnsToLive: number;
}
