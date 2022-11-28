import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApi2RecipeInfox } from "./bigovenmodelapi2recipeinfox";



export class BigOvenModelApi2RecipeSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResultCount" })
  resultCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Results", elemType: BigOvenModelApi2RecipeInfox })
  results?: BigOvenModelApi2RecipeInfox[];

  @SpeakeasyMetadata({ data: "json, name=SpellSuggest" })
  spellSuggest?: string;
}
