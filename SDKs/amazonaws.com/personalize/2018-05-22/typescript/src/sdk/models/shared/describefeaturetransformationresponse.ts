import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureTransformation } from "./featuretransformation";



export class DescribeFeatureTransformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=featureTransformation" })
  featureTransformation?: FeatureTransformation;
}
