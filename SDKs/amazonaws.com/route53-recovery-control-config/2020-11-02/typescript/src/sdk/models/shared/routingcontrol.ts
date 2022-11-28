import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



// RoutingControl
/** 
 * A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.
**/
export class RoutingControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlPanelArn" })
  controlPanelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingControlArn" })
  routingControlArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
