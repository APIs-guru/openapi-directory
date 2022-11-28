import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountGroup" })
  accountGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
