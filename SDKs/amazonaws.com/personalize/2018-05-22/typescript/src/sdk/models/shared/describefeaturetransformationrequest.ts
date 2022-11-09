import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeFeatureTransformationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=featureTransformationArn" })
  featureTransformationArn: string;
}
