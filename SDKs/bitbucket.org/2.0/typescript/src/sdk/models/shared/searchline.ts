import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchSegment } from "./searchsegment";



export class SearchLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: number;

  @SpeakeasyMetadata({ data: "json, name=segments", elemType: SearchSegment })
  segments?: SearchSegment[];
}
