import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommenderConfigurationResponse } from "./recommenderconfigurationresponse";



// ListRecommenderConfigurationsResponse
/** 
 * Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
**/
export class ListRecommenderConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: RecommenderConfigurationResponse })
  item: RecommenderConfigurationResponse[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
