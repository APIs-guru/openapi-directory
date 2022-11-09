import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputContext
/** 
 * The specification of an output context that is set when an intent is fulfilled.
**/
export class OutputContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=timeToLiveInSeconds" })
  timeToLiveInSeconds: number;

  @Metadata({ data: "json, name=turnsToLive" })
  turnsToLive: number;
}
