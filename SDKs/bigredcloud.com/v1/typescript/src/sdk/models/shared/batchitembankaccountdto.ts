import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BankAccountDto } from "./bankaccountdto";



export class BatchItemBankAccountDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: BankAccountDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
