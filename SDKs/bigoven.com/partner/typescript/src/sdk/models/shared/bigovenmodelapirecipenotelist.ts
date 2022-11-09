import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BigOvenModelApiRecipeNote } from "./bigovenmodelapirecipenote";


export class BigOvenModelApiRecipeNoteList extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResultCount" })
  resultCount?: number;

  @Metadata({ data: "json, name=Results", elemType: shared.BigOvenModelApiRecipeNote })
  results?: BigOvenModelApiRecipeNote[];
}
