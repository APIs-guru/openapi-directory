import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiRecipeNote } from "./bigovenmodelapirecipenote";



export class BigOvenModelApiRecipeNoteList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResultCount" })
  resultCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Results", elemType: BigOvenModelApiRecipeNote })
  results?: BigOvenModelApiRecipeNote[];
}
