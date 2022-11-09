import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BigOvenModelApi2RecipeInfox } from "./bigovenmodelapi2recipeinfox";


export class BigOvenModelRecipeInfoDateTuple2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=recipeInfo" })
  recipeInfo?: BigOvenModelApi2RecipeInfox;
}
