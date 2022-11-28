import { SpeakeasyBase } from "../../../internal/utils";
import { RecommenderConfigurationResponse } from "./recommenderconfigurationresponse";
/**
 * Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
**/
export declare class ListRecommenderConfigurationsResponse extends SpeakeasyBase {
    item: RecommenderConfigurationResponse[];
    nextToken?: string;
}
