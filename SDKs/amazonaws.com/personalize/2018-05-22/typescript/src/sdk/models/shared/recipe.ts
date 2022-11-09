import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Recipe
/** 
 * Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a>CreateSolution</a> operation. 
**/
export class Recipe extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithmArn" })
  algorithmArn?: string;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=featureTransformationArn" })
  featureTransformationArn?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=recipeArn" })
  recipeArn?: string;

  @Metadata({ data: "json, name=recipeType" })
  recipeType?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
