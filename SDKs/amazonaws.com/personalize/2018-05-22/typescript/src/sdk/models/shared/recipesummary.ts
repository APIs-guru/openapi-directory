import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecipeSummary
/** 
 * Provides a summary of the properties of a recipe. For a complete listing, call the <a>DescribeRecipe</a> API.
**/
export class RecipeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=recipeArn" })
  recipeArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
