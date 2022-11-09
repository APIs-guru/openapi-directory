import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeFeatureGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
