import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BigOvenModelApi2RecipeInfox } from "./bigovenmodelapi2recipeinfox";
import { BigOvenModelApiReview } from "./bigovenmodelapireview";


export class BigOvenModelRecipeInfoReviewTuple2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=RecipeInfo" })
  recipeInfo?: BigOvenModelApi2RecipeInfox;

  @Metadata({ data: "json, name=Review" })
  review?: BigOvenModelApiReview;
}
