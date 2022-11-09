import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Article extends SpeakeasyBase {
  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=pubdate" })
  pubdate?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
