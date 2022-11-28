import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureGroupSummary } from "./featuregroupsummary";
export declare class ListFeatureGroupsResponse extends SpeakeasyBase {
    featureGroupSummaries: FeatureGroupSummary[];
    nextToken: string;
}
