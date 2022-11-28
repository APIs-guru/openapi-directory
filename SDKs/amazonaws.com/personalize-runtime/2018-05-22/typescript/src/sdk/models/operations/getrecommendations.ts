import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecommendationsHeaders extends SpeakeasyBase {
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


export class GetRecommendationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignArn" })
  campaignArn: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=filterArn" })
  filterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=filterValues" })
  filterValues?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=numResults" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}


export class GetRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetRecommendationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetRecommendationsRequestBody;
}


export class GetRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRecommendationsResponse?: shared.GetRecommendationsResponse;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
