import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetContentModerationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetContentModerationXAmzTargetEnum {
    RekognitionServiceGetContentModeration = "RekognitionService.GetContentModeration"
}


export class GetContentModerationHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetContentModerationXAmzTargetEnum;
}


export class GetContentModerationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetContentModerationQueryParams;

  @Metadata()
  headers: GetContentModerationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetContentModerationRequest;
}


export class GetContentModerationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getContentModerationResponse?: shared.GetContentModerationResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidPaginationTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
