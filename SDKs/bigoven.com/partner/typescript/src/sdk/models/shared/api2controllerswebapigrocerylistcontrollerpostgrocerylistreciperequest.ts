import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=markAsPending, form, name=markAsPending;" })
  markAsPending?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recipeId, form, name=recipeId;" })
  recipeId?: number;

  @SpeakeasyMetadata({ data: "json, name=scale, form, name=scale;" })
  scale?: number;
}
