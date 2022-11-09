import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchSegment } from "./searchsegment";


export class SearchLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=line" })
  line?: number;

  @Metadata({ data: "json, name=segments", elemType: shared.SearchSegment })
  segments?: SearchSegment[];
}
