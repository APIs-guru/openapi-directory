import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Chapter extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=src" })
  src?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
