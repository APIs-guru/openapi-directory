import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CashPaymentDto } from "./cashpaymentdto";



export class BatchItemCashPaymentDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: CashPaymentDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
