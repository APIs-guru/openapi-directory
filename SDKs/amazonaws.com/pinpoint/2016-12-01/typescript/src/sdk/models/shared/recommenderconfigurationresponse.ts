import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecommenderConfigurationResponse
/** 
 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
**/
export class RecommenderConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RecommendationProviderIdType" })
  recommendationProviderIdType?: string;

  @Metadata({ data: "json, name=RecommendationProviderRoleArn" })
  recommendationProviderRoleArn: string;

  @Metadata({ data: "json, name=RecommendationProviderUri" })
  recommendationProviderUri: string;

  @Metadata({ data: "json, name=RecommendationTransformerUri" })
  recommendationTransformerUri?: string;

  @Metadata({ data: "json, name=RecommendationsDisplayName" })
  recommendationsDisplayName?: string;

  @Metadata({ data: "json, name=RecommendationsPerMessage" })
  recommendationsPerMessage?: number;
}
