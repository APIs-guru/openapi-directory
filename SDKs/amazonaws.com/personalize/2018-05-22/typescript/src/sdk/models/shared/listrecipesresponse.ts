import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecipeSummary } from "./recipesummary";


export class ListRecipesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=recipes", elemType: shared.RecipeSummary })
  recipes?: RecipeSummary[];
}
