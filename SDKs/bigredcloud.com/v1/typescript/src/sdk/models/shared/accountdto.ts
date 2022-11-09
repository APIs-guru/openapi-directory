import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountGroup" })
  accountGroup?: string;

  @Metadata({ data: "json, name=accountType" })
  accountType?: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
