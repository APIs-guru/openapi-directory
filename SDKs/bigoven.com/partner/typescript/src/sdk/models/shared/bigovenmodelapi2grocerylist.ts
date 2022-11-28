import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiGroceryItem } from "./bigovenmodelapigroceryitem";
import { BigOvenModelApi2RecipeInfox } from "./bigovenmodelapi2recipeinfox";



export class BigOvenModelApi2GroceryList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: BigOvenModelApiGroceryItem })
  items?: BigOvenModelApiGroceryItem[];

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=Recipes", elemType: BigOvenModelApi2RecipeInfox })
  recipes?: BigOvenModelApi2RecipeInfox[];

  @SpeakeasyMetadata({ data: "json, name=VersionGuid" })
  versionGuid?: string;
}
