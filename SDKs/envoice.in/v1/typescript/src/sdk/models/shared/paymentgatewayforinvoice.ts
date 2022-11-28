import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaymentGatewayForInvoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
