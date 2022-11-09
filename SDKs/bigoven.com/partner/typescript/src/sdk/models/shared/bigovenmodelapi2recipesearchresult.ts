import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BigOvenModelApi2RecipeInfox } from "./bigovenmodelapi2recipeinfox";


export class BigOvenModelApi2RecipeSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResultCount" })
  resultCount?: number;

  @Metadata({ data: "json, name=Results", elemType: shared.BigOvenModelApi2RecipeInfox })
  results?: BigOvenModelApi2RecipeInfox[];

  @Metadata({ data: "json, name=SpellSuggest" })
  spellSuggest?: string;
}
