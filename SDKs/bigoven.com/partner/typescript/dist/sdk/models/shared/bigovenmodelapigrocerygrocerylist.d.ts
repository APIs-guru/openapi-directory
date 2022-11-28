import { SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiGroceryItem } from "./bigovenmodelapigroceryitem";
import { BigOvenModelApiRecipeInfoInput } from "./bigovenmodelapirecipeinfo";
export declare class BigOvenModelApiGroceryGroceryListInput extends SpeakeasyBase {
    items?: BigOvenModelApiGroceryItem[];
    lastModified?: Date;
    recipes?: BigOvenModelApiRecipeInfoInput[];
    versionGuid?: string;
}
