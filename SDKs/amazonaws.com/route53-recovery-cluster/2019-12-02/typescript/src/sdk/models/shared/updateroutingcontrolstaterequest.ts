import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoutingControlStateEnum } from "./routingcontrolstateenum";


export class UpdateRoutingControlStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoutingControlArn" })
  routingControlArn: string;

  @Metadata({ data: "json, name=RoutingControlState" })
  routingControlState: RoutingControlStateEnum;
}
