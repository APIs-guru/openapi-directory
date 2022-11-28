import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigOvenModelRecipeInfoTiny extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageURL" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=QualityScore" })
  qualityScore?: number;

  @SpeakeasyMetadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @SpeakeasyMetadata({ data: "json, name=Servings" })
  servings?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
