import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoutingControlStateEnum } from "./routingcontrolstateenum";



// UpdateRoutingControlStateEntry
/** 
 * A routing control state.
**/
export class UpdateRoutingControlStateEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoutingControlArn" })
  routingControlArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingControlState" })
  routingControlState: RoutingControlStateEnum;
}
