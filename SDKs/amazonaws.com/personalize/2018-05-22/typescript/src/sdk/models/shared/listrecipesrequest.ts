import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecipeProviderEnum } from "./recipeproviderenum";


export class ListRecipesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=recipeProvider" })
  recipeProvider?: RecipeProviderEnum;
}
