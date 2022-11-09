import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductGatewayApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
