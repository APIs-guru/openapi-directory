import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CashReceiptDto } from "./cashreceiptdto";



export class BatchItemCashReceiptDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: CashReceiptDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
