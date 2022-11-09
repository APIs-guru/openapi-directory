import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigOvenModelApiGroceryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=BigOvenObject" })
  bigOvenObject?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=Department" })
  department?: string;

  @Metadata({ data: "json, name=DisplayQuantity" })
  displayQuantity?: string;

  @Metadata({ data: "json, name=GUID" })
  guid?: string;

  @Metadata({ data: "json, name=IsChecked" })
  isChecked?: boolean;

  @Metadata({ data: "json, name=ItemID" })
  itemId?: number;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=LocalStatus" })
  localStatus?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @Metadata({ data: "json, name=ThirdPartyURL" })
  thirdPartyUrl?: string;
}
