import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EftBankDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sortCode" })
  sortCode?: string;
}
