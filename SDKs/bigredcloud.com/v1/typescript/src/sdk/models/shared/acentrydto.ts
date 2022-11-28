import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AcEntryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountCode" })
  accountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=analysisCategoryId" })
  analysisCategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
