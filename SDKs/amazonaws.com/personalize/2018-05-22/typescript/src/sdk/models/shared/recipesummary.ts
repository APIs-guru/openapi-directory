import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecipeSummary
/** 
 * Provides a summary of the properties of a recipe. For a complete listing, call the <a>DescribeRecipe</a> API.
**/
export class RecipeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recipeArn" })
  recipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
