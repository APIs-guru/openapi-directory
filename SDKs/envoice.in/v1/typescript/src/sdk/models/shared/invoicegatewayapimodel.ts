import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceGatewayApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
