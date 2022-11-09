import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRecommenderConfigurationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration
/** 
 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
**/
export class CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RecommendationProviderIdType" })
  recommendationProviderIdType?: string;

  @Metadata({ data: "json, name=RecommendationProviderRoleArn" })
  recommendationProviderRoleArn?: string;

  @Metadata({ data: "json, name=RecommendationProviderUri" })
  recommendationProviderUri?: string;

  @Metadata({ data: "json, name=RecommendationTransformerUri" })
  recommendationTransformerUri?: string;

  @Metadata({ data: "json, name=RecommendationsDisplayName" })
  recommendationsDisplayName?: string;

  @Metadata({ data: "json, name=RecommendationsPerMessage" })
  recommendationsPerMessage?: number;
}


export class CreateRecommenderConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateRecommenderConfiguration" })
  createRecommenderConfiguration: CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration;
}


export class CreateRecommenderConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRecommenderConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateRecommenderConfigurationRequestBody;
}


export class CreateRecommenderConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createRecommenderConfigurationResponse?: shared.CreateRecommenderConfigurationResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
