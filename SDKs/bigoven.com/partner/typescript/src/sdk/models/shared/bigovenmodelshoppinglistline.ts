import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigOvenModelShoppingListLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateAdded" })
  dateAdded?: Date;

  @Metadata({ data: "json, name=Dept" })
  dept?: string;

  @Metadata({ data: "json, name=GUID" })
  guid?: string;

  @Metadata({ data: "json, name=HTMLItemName" })
  htmlItemName?: string;

  @Metadata({ data: "json, name=IsChecked" })
  isChecked?: boolean;

  @Metadata({ data: "json, name=ItemName" })
  itemName?: string;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=ListID" })
  listId?: number;

  @Metadata({ data: "json, name=MealPlanID" })
  mealPlanId?: number;

  @Metadata({ data: "json, name=MealPlanObjectType" })
  mealPlanObjectType?: number;

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=PendingAddition" })
  pendingAddition?: boolean;

  @Metadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @Metadata({ data: "json, name=ShoppingListLineID" })
  shoppingListLineId?: number;

  @Metadata({ data: "json, name=Store" })
  store?: string;

  @Metadata({ data: "json, name=TextAmt" })
  textAmt?: string;

  @Metadata({ data: "json, name=ThirdPartyHost" })
  thirdPartyHost?: string;

  @Metadata({ data: "json, name=ThirdPartyTitle" })
  thirdPartyTitle?: string;

  @Metadata({ data: "json, name=ThirdPartyURL" })
  thirdPartyUrl?: string;
}
