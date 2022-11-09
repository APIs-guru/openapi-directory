import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RelatedSearch extends SpeakeasyBase {
  @Metadata({ data: "json, name=phrase" })
  phrase?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
