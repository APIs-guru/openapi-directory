import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountDto } from "./accountdto";


export class PageResultAccountDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.AccountDto })
  items?: AccountDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
