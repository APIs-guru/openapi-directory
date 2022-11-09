import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AcEntryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountCode" })
  accountCode?: string;

  @Metadata({ data: "json, name=analysisCategoryId" })
  analysisCategoryId?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
