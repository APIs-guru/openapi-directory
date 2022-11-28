import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductGatewayApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
