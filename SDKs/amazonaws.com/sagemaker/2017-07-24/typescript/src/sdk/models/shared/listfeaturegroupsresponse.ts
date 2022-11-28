import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureGroupSummary } from "./featuregroupsummary";



export class ListFeatureGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeatureGroupSummaries", elemType: FeatureGroupSummary })
  featureGroupSummaries: FeatureGroupSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken: string;
}
