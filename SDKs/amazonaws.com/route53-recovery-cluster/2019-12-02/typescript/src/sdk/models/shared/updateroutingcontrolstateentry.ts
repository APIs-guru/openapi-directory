import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoutingControlStateEnum } from "./routingcontrolstateenum";


// UpdateRoutingControlStateEntry
/** 
 * A routing control state.
**/
export class UpdateRoutingControlStateEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoutingControlArn" })
  routingControlArn: string;

  @Metadata({ data: "json, name=RoutingControlState" })
  routingControlState: RoutingControlStateEnum;
}
