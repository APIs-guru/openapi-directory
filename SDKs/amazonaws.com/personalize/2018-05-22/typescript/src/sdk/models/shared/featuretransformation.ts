import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FeatureTransformation
/** 
 * Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training.
**/
export class FeatureTransformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultParameters" })
  defaultParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=featureTransformationArn" })
  featureTransformationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
