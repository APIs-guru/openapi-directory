import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRoutingControlStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoutingControlArn" })
  routingControlArn: string;
}
