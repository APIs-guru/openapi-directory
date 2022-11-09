import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActiveContextTimeToLive
/** 
 * The length of time or number of turns that a context remains active.
**/
export class ActiveContextTimeToLive extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeToLiveInSeconds" })
  timeToLiveInSeconds?: number;

  @Metadata({ data: "json, name=turnsToLive" })
  turnsToLive?: number;
}
