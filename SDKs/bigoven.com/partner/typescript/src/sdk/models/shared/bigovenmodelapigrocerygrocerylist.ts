import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiGroceryItem } from "./bigovenmodelapigroceryitem";
import { BigOvenModelApiRecipeInfoInput } from "./bigovenmodelapirecipeinfo";



export class BigOvenModelApiGroceryGroceryListInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: BigOvenModelApiGroceryItem })
  items?: BigOvenModelApiGroceryItem[];

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=Recipes", elemType: BigOvenModelApiRecipeInfoInput })
  recipes?: BigOvenModelApiRecipeInfoInput[];

  @SpeakeasyMetadata({ data: "json, name=VersionGuid" })
  versionGuid?: string;
}
