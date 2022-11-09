import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BigOvenModelApiGroceryItem } from "./bigovenmodelapigroceryitem";
import { BigOvenModelApi2RecipeInfox } from "./bigovenmodelapi2recipeinfox";


export class BigOvenModelApi2GroceryList extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.BigOvenModelApiGroceryItem })
  items?: BigOvenModelApiGroceryItem[];

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=Recipes", elemType: shared.BigOvenModelApi2RecipeInfox })
  recipes?: BigOvenModelApi2RecipeInfox[];

  @Metadata({ data: "json, name=VersionGuid" })
  versionGuid?: string;
}
