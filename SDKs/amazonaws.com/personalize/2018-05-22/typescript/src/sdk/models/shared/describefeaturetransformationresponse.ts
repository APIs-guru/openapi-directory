import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FeatureTransformation } from "./featuretransformation";


export class DescribeFeatureTransformationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=featureTransformation" })
  featureTransformation?: FeatureTransformation;
}
