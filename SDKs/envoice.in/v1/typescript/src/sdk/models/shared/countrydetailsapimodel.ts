import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CountryDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
