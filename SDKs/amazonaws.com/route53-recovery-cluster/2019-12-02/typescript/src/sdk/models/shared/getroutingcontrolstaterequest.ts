import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRoutingControlStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoutingControlArn" })
  routingControlArn: string;
}
