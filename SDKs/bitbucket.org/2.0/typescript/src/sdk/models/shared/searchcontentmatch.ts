import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchLine } from "./searchline";


export class SearchContentMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=lines", elemType: shared.SearchLine })
  lines?: SearchLine[];
}
