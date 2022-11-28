import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=department, form, name=department;" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes, form, name=notes;" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity, form, name=quantity;" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=unit, form, name=unit;" })
  unit?: string;
}
