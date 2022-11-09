import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommenderConfigurationResponse } from "./recommenderconfigurationresponse";


// ListRecommenderConfigurationsResponse
/** 
 * Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
**/
export class ListRecommenderConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.RecommenderConfigurationResponse })
  item: RecommenderConfigurationResponse[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
