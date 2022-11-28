import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecipeProviderEnum } from "./recipeproviderenum";



export class ListRecipesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=recipeProvider" })
  recipeProvider?: RecipeProviderEnum;
}
