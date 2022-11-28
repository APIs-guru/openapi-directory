import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartCelebrityRecognitionXAmzTargetEnum {
    RekognitionServiceStartCelebrityRecognition = "RekognitionService.StartCelebrityRecognition"
}


export class StartCelebrityRecognitionHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StartCelebrityRecognitionXAmzTargetEnum;
}


export class StartCelebrityRecognitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartCelebrityRecognitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartCelebrityRecognitionRequest;
}


export class StartCelebrityRecognitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  invalidS3ObjectException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  provisionedThroughputExceededException?: any;

  @SpeakeasyMetadata()
  startCelebrityRecognitionResponse?: shared.StartCelebrityRecognitionResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  videoTooLargeException?: any;
}
