import { SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiGroceryItem } from "./bigovenmodelapigroceryitem";
import { BigOvenModelApi2RecipeInfox } from "./bigovenmodelapi2recipeinfox";
export declare class BigOvenModelApi2GroceryList extends SpeakeasyBase {
    items?: BigOvenModelApiGroceryItem[];
    lastModified?: Date;
    recipes?: BigOvenModelApi2RecipeInfox[];
    versionGuid?: string;
}
