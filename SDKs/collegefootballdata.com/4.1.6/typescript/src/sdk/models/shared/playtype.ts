import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayType extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
