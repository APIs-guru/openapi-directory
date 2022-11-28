import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApi2RecipeInfox } from "./bigovenmodelapi2recipeinfox";
import { BigOvenModelApiReview } from "./bigovenmodelapireview";



export class BigOvenModelRecipeInfoReviewTuple2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecipeInfo" })
  recipeInfo?: BigOvenModelApi2RecipeInfox;

  @SpeakeasyMetadata({ data: "json, name=Review" })
  review?: BigOvenModelApiReview;
}
