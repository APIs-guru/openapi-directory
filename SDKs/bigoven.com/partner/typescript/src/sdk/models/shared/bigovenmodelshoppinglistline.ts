import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigOvenModelShoppingListLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateAdded" })
  dateAdded?: Date;

  @SpeakeasyMetadata({ data: "json, name=Dept" })
  dept?: string;

  @SpeakeasyMetadata({ data: "json, name=GUID" })
  guid?: string;

  @SpeakeasyMetadata({ data: "json, name=HTMLItemName" })
  htmlItemName?: string;

  @SpeakeasyMetadata({ data: "json, name=IsChecked" })
  isChecked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ItemName" })
  itemName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=ListID" })
  listId?: number;

  @SpeakeasyMetadata({ data: "json, name=MealPlanID" })
  mealPlanId?: number;

  @SpeakeasyMetadata({ data: "json, name=MealPlanObjectType" })
  mealPlanObjectType?: number;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=PendingAddition" })
  pendingAddition?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @SpeakeasyMetadata({ data: "json, name=ShoppingListLineID" })
  shoppingListLineId?: number;

  @SpeakeasyMetadata({ data: "json, name=Store" })
  store?: string;

  @SpeakeasyMetadata({ data: "json, name=TextAmt" })
  textAmt?: string;

  @SpeakeasyMetadata({ data: "json, name=ThirdPartyHost" })
  thirdPartyHost?: string;

  @SpeakeasyMetadata({ data: "json, name=ThirdPartyTitle" })
  thirdPartyTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=ThirdPartyURL" })
  thirdPartyUrl?: string;
}
