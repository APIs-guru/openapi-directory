import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Listing extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullDescription" })
  fullDescription?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=video" })
  video?: string;
}
