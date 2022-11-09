import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCelebrityRecognitionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetCelebrityRecognitionXAmzTargetEnum {
    RekognitionServiceGetCelebrityRecognition = "RekognitionService.GetCelebrityRecognition"
}


export class GetCelebrityRecognitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCelebrityRecognitionXAmzTargetEnum;
}


export class GetCelebrityRecognitionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCelebrityRecognitionQueryParams;

  @Metadata()
  headers: GetCelebrityRecognitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetCelebrityRecognitionRequest;
}


export class GetCelebrityRecognitionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getCelebrityRecognitionResponse?: shared.GetCelebrityRecognitionResponse;

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
