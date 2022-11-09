import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DraftPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
