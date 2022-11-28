import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateRecommenderConfigurationHeaders extends SpeakeasyBase {
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


// CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration
/** 
 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
**/
export class CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration extends SpeakeasyBase {
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


export class CreateRecommenderConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateRecommenderConfiguration" })
  createRecommenderConfiguration: CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration;
}


export class CreateRecommenderConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateRecommenderConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateRecommenderConfigurationRequestBody;
}


export class CreateRecommenderConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createRecommenderConfigurationResponse?: shared.CreateRecommenderConfigurationResponse;

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
}
