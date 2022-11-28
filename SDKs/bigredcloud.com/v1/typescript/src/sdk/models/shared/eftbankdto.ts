import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EftBankDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sortCode" })
  sortCode?: string;
}
