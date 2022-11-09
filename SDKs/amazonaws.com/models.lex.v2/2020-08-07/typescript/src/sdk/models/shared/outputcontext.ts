import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputContext
/** 
 * Describes a session context that is activated when an intent is fulfilled.
**/
export class OutputContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=timeToLiveInSeconds" })
  timeToLiveInSeconds: number;

  @Metadata({ data: "json, name=turnsToLive" })
  turnsToLive: number;
}
