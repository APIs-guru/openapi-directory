import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FeatureTransformation
/** 
 * Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training.
**/
export class FeatureTransformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=defaultParameters" })
  defaultParameters?: Map<string, string>;

  @Metadata({ data: "json, name=featureTransformationArn" })
  featureTransformationArn?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
