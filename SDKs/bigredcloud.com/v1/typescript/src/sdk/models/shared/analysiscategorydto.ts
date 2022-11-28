import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnalysisCategoryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountCode" })
  accountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=categoryTypeId" })
  categoryTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=orderIndex" })
  orderIndex?: number;
}
