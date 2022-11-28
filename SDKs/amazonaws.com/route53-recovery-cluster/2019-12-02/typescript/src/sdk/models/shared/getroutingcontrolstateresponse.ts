import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoutingControlStateEnum } from "./routingcontrolstateenum";



export class GetRoutingControlStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoutingControlArn" })
  routingControlArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingControlState" })
  routingControlState: RoutingControlStateEnum;
}
