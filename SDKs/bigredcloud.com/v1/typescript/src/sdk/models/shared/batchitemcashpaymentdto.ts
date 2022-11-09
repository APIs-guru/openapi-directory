import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CashPaymentDto } from "./cashpaymentdto";


export class BatchItemCashPaymentDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: CashPaymentDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
