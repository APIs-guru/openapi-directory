import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRecommenderConfigurationPathParams extends SpeakeasyBase {
    recommenderId: string;
}
export declare class UpdateRecommenderConfigurationHeaders extends SpeakeasyBase {
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
export declare class UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration extends SpeakeasyBase {
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
export declare class UpdateRecommenderConfigurationRequestBody extends SpeakeasyBase {
    updateRecommenderConfiguration: UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration;
}
export declare class UpdateRecommenderConfigurationRequest extends SpeakeasyBase {
    pathParams: UpdateRecommenderConfigurationPathParams;
    headers: UpdateRecommenderConfigurationHeaders;
    request: UpdateRecommenderConfigurationRequestBody;
}
export declare class UpdateRecommenderConfigurationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateRecommenderConfigurationResponse?: shared.UpdateRecommenderConfigurationResponse;
}
