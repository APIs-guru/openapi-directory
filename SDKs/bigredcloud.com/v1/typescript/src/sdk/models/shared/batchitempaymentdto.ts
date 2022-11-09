import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PaymentDto } from "./paymentdto";


export class BatchItemPaymentDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: PaymentDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
