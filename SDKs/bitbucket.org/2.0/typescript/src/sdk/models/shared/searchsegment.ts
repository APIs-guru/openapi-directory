import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: boolean;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
