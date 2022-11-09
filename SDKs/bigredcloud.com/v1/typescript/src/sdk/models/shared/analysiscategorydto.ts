import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AnalysisCategoryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountCode" })
  accountCode?: string;

  @Metadata({ data: "json, name=accountId" })
  accountId?: number;

  @Metadata({ data: "json, name=categoryTypeId" })
  categoryTypeId?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=orderIndex" })
  orderIndex?: number;
}
