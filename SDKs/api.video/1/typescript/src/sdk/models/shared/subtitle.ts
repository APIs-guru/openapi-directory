import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Subtitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=default" })
  default?: boolean;

  @Metadata({ data: "json, name=src" })
  src?: string;

  @Metadata({ data: "json, name=srclang" })
  srclang?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
