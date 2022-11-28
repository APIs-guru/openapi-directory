import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CurrencyApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
