import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigOvenModelRecipeInfoTiny extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageURL" })
  imageUrl?: string;

  @Metadata({ data: "json, name=QualityScore" })
  qualityScore?: number;

  @Metadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @Metadata({ data: "json, name=Servings" })
  servings?: number;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
