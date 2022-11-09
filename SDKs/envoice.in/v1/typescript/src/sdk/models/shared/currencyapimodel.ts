import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CurrencyApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
