import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Article extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=pubdate" })
  pubdate?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
