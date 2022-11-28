import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFeatureTransformationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=featureTransformationArn" })
  featureTransformationArn: string;
}
