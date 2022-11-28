import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigOvenModelApiGroceryItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BigOvenObject" })
  bigOvenObject?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayQuantity" })
  displayQuantity?: string;

  @SpeakeasyMetadata({ data: "json, name=GUID" })
  guid?: string;

  @SpeakeasyMetadata({ data: "json, name=IsChecked" })
  isChecked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ItemID" })
  itemId?: number;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=LocalStatus" })
  localStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @SpeakeasyMetadata({ data: "json, name=ThirdPartyURL" })
  thirdPartyUrl?: string;
}
