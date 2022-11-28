import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RelatedSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phrase" })
  phrase?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
