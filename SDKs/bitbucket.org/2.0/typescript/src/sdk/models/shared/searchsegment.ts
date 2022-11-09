import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=match" })
  match?: boolean;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
