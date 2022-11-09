import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartDocumentTextDetectionXAmzTargetEnum {
    TextractStartDocumentTextDetection = "Textract.StartDocumentTextDetection"
}


export class StartDocumentTextDetectionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartDocumentTextDetectionXAmzTargetEnum;
}


export class StartDocumentTextDetectionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartDocumentTextDetectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartDocumentTextDetectionRequest;
}


export class StartDocumentTextDetectionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badDocumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  documentTooLargeException?: any;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidKmsKeyException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidS3ObjectException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  startDocumentTextDetectionResponse?: shared.StartDocumentTextDetectionResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unsupportedDocumentException?: any;
}
