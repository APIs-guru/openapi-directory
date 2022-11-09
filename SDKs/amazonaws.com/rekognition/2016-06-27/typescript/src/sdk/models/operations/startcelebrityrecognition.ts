import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartCelebrityRecognitionXAmzTargetEnum {
    RekognitionServiceStartCelebrityRecognition = "RekognitionService.StartCelebrityRecognition"
}


export class StartCelebrityRecognitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartCelebrityRecognitionXAmzTargetEnum;
}


export class StartCelebrityRecognitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartCelebrityRecognitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartCelebrityRecognitionRequest;
}


export class StartCelebrityRecognitionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidS3ObjectException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  startCelebrityRecognitionResponse?: shared.StartCelebrityRecognitionResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  videoTooLargeException?: any;
}
