import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecommendationsHeaders extends SpeakeasyBase {
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


export class GetRecommendationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignArn" })
  campaignArn: string;

  @Metadata({ data: "json, name=context" })
  context?: Map<string, string>;

  @Metadata({ data: "json, name=filterArn" })
  filterArn?: string;

  @Metadata({ data: "json, name=filterValues" })
  filterValues?: Map<string, string>;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=numResults" })
  numResults?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}


export class GetRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRecommendationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetRecommendationsRequestBody;
}


export class GetRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRecommendationsResponse?: shared.GetRecommendationsResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
