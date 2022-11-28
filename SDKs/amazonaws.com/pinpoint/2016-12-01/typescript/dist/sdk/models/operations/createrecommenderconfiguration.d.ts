import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRecommenderConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
**/
export declare class CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration extends SpeakeasyBase {
    attributes?: Map<string, string>;
    description?: string;
    name?: string;
    recommendationProviderIdType?: string;
    recommendationProviderRoleArn?: string;
    recommendationProviderUri?: string;
    recommendationTransformerUri?: string;
    recommendationsDisplayName?: string;
    recommendationsPerMessage?: number;
}
export declare class CreateRecommenderConfigurationRequestBody extends SpeakeasyBase {
    createRecommenderConfiguration: CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration;
}
export declare class CreateRecommenderConfigurationRequest extends SpeakeasyBase {
    headers: CreateRecommenderConfigurationHeaders;
    request: CreateRecommenderConfigurationRequestBody;
}
export declare class CreateRecommenderConfigurationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createRecommenderConfigurationResponse?: shared.CreateRecommenderConfigurationResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
