import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Recipe
/** 
 * Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a>CreateSolution</a> operation. 
**/
export class Recipe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithmArn" })
  algorithmArn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=featureTransformationArn" })
  featureTransformationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recipeArn" })
  recipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=recipeType" })
  recipeType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
