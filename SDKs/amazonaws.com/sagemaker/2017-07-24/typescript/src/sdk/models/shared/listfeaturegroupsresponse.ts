import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FeatureGroupSummary } from "./featuregroupsummary";


export class ListFeatureGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeatureGroupSummaries", elemType: shared.FeatureGroupSummary })
  featureGroupSummaries: FeatureGroupSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken: string;
}
