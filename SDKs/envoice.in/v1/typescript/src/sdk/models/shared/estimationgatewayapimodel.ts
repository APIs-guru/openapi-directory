import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EstimationGatewayApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
