import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BankAccountQueryDto } from "./bankaccountquerydto";



export class PageResultBankAccountQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: BankAccountQueryDto })
  items?: BankAccountQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
