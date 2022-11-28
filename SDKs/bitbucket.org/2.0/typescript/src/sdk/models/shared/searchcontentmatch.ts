import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchLine } from "./searchline";



export class SearchContentMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lines", elemType: SearchLine })
  lines?: SearchLine[];
}
