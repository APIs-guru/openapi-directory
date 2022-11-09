import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BankAccountDto } from "./bankaccountdto";


export class BatchItemBankAccountDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: BankAccountDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
