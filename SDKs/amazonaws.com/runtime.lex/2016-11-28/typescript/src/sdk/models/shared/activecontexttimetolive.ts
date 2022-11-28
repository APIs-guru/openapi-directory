import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActiveContextTimeToLive
/** 
 * The length of time or number of turns that a context remains active.
**/
export class ActiveContextTimeToLive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeToLiveInSeconds" })
  timeToLiveInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=turnsToLive" })
  turnsToLive?: number;
}
