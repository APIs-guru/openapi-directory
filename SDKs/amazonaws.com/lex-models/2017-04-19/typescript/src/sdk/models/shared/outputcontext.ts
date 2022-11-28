import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputContext
/** 
 * The specification of an output context that is set when an intent is fulfilled.
**/
export class OutputContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=timeToLiveInSeconds" })
  timeToLiveInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=turnsToLive" })
  turnsToLive: number;
}
