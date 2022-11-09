import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoutingControl } from "./routingcontrol";


export class UpdateRoutingControlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoutingControl" })
  routingControl?: RoutingControl;
}
