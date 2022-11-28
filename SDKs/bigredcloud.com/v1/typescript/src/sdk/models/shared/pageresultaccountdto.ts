import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountDto } from "./accountdto";



export class PageResultAccountDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: AccountDto })
  items?: AccountDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
