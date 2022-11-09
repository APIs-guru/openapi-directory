import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=markAsPending, form, name=markAsPending;" })
  markAsPending?: boolean;

  @Metadata({ data: "json, name=recipeId, form, name=recipeId;" })
  recipeId?: number;

  @Metadata({ data: "json, name=scale, form, name=scale;" })
  scale?: number;
}
