import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecommenderConfigurationResponse
/** 
 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
**/
export class RecommenderConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationProviderIdType" })
  recommendationProviderIdType?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationProviderRoleArn" })
  recommendationProviderRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationProviderUri" })
  recommendationProviderUri: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationTransformerUri" })
  recommendationTransformerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationsDisplayName" })
  recommendationsDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationsPerMessage" })
  recommendationsPerMessage?: number;
}
