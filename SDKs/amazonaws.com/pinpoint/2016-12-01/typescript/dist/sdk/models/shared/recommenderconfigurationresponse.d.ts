import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
**/
export declare class RecommenderConfigurationResponse extends SpeakeasyBase {
    attributes?: Map<string, string>;
    creationDate: string;
    description?: string;
    id: string;
    lastModifiedDate: string;
    name?: string;
    recommendationProviderIdType?: string;
    recommendationProviderRoleArn: string;
    recommendationProviderUri: string;
    recommendationTransformerUri?: string;
    recommendationsDisplayName?: string;
    recommendationsPerMessage?: number;
}
