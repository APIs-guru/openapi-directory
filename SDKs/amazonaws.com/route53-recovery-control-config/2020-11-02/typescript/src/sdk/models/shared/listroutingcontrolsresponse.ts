import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoutingControl } from "./routingcontrol";


export class ListRoutingControlsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RoutingControls", elemType: shared.RoutingControl })
  routingControls?: RoutingControl[];
}
