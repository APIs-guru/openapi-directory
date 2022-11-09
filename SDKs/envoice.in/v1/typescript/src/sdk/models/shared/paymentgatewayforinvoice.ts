import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PaymentGatewayForInvoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
