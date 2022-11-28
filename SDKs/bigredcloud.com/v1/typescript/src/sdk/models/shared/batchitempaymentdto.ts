import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentDto } from "./paymentdto";



export class BatchItemPaymentDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: PaymentDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
