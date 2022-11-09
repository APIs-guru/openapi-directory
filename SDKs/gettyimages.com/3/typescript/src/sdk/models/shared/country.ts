import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Country extends SpeakeasyBase {
  @Metadata({ data: "json, name=iso_alpha_2" })
  isoAlpha2?: string;

  @Metadata({ data: "json, name=iso_alpha_3" })
  isoAlpha3?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
