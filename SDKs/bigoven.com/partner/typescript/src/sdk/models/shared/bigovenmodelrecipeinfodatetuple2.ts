import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApi2RecipeInfox } from "./bigovenmodelapi2recipeinfox";



export class BigOvenModelRecipeInfoDateTuple2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=recipeInfo" })
  recipeInfo?: BigOvenModelApi2RecipeInfox;
}
