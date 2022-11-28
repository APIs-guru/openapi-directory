import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoutingControl } from "./routingcontrol";



export class DescribeRoutingControlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoutingControl" })
  routingControl?: RoutingControl;
}
