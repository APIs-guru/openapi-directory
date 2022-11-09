import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BankAccountQueryDto } from "./bankaccountquerydto";


export class PageResultBankAccountQueryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.BankAccountQueryDto })
  items?: BankAccountQueryDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
