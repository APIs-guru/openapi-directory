import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CashReceiptDto } from "./cashreceiptdto";


export class BatchItemCashReceiptDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: CashReceiptDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
