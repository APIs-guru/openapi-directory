import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRecommenderConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recommender-id" })
  recommenderId: string;
}


export class UpdateRecommenderConfigurationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration
/** 
 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
**/
export class UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationProviderIdType" })
  recommendationProviderIdType?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationProviderRoleArn" })
  recommendationProviderRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationProviderUri" })
  recommendationProviderUri?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationTransformerUri" })
  recommendationTransformerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationsDisplayName" })
  recommendationsDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommendationsPerMessage" })
  recommendationsPerMessage?: number;
}


export class UpdateRecommenderConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UpdateRecommenderConfiguration" })
  updateRecommenderConfiguration: UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration;
}


export class UpdateRecommenderConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRecommenderConfigurationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateRecommenderConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateRecommenderConfigurationRequestBody;
}


export class UpdateRecommenderConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateRecommenderConfigurationResponse?: shared.UpdateRecommenderConfigurationResponse;
}
