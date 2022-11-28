import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputContext
/** 
 * Describes a session context that is activated when an intent is fulfilled.
**/
export class OutputContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=timeToLiveInSeconds" })
  timeToLiveInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=turnsToLive" })
  turnsToLive: number;
}
