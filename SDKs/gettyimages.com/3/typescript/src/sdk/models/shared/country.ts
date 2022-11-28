import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Country extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iso_alpha_2" })
  isoAlpha2?: string;

  @SpeakeasyMetadata({ data: "json, name=iso_alpha_3" })
  isoAlpha3?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
