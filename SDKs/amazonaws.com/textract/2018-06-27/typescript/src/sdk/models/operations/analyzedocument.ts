import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AnalyzeDocumentXAmzTargetEnum {
    TextractAnalyzeDocument = "Textract.AnalyzeDocument"
}


export class AnalyzeDocumentHeaders extends SpeakeasyBase {
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
  xAmzTarget: AnalyzeDocumentXAmzTargetEnum;
}


export class AnalyzeDocumentRequest extends SpeakeasyBase {
  @Metadata()
  headers: AnalyzeDocumentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AnalyzeDocumentRequest;
}


export class AnalyzeDocumentResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  analyzeDocumentResponse?: shared.AnalyzeDocumentResponse;

  @Metadata()
  badDocumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  documentTooLargeException?: any;

  @Metadata()
  humanLoopQuotaExceededException?: any;

  @Metadata()
  internalServerError?: any;

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

  @Metadata()
  unsupportedDocumentException?: any;
}
