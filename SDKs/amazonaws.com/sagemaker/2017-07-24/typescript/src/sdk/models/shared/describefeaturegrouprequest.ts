import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFeatureGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
