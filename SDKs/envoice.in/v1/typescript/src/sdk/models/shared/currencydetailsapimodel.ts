import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CurrencyDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Symbol" })
  symbol?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
