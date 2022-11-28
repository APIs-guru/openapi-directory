import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecipeSummary } from "./recipesummary";



export class ListRecipesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=recipes", elemType: RecipeSummary })
  recipes?: RecipeSummary[];
}
