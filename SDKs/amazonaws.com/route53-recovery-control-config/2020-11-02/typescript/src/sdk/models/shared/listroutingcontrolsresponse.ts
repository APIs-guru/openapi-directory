import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoutingControl } from "./routingcontrol";



export class ListRoutingControlsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingControls", elemType: RoutingControl })
  routingControls?: RoutingControl[];
}
