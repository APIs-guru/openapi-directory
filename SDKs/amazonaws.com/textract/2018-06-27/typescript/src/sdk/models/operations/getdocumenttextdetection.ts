import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDocumentTextDetectionXAmzTargetEnum {
    TextractGetDocumentTextDetection = "Textract.GetDocumentTextDetection"
}


export class GetDocumentTextDetectionHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDocumentTextDetectionXAmzTargetEnum;
}


export class GetDocumentTextDetectionRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDocumentTextDetectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDocumentTextDetectionRequest;
}


export class GetDocumentTextDetectionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getDocumentTextDetectionResponse?: shared.GetDocumentTextDetectionResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidJobIdException?: any;

  @Metadata()
  invalidKmsKeyException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidS3ObjectException?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
