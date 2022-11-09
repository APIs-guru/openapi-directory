import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AnalyzeExpenseXAmzTargetEnum {
    TextractAnalyzeExpense = "Textract.AnalyzeExpense"
}


export class AnalyzeExpenseHeaders extends SpeakeasyBase {
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
  xAmzTarget: AnalyzeExpenseXAmzTargetEnum;
}


export class AnalyzeExpenseRequest extends SpeakeasyBase {
  @Metadata()
  headers: AnalyzeExpenseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AnalyzeExpenseRequest;
}


export class AnalyzeExpenseResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  analyzeExpenseResponse?: shared.AnalyzeExpenseResponse;

  @Metadata()
  badDocumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  documentTooLargeException?: any;

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
