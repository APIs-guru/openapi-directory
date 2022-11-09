import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TranslateTextXAmzTargetEnum {
    AwsShineFrontendService20170701TranslateText = "AWSShineFrontendService_20170701.TranslateText"
}


export class TranslateTextHeaders extends SpeakeasyBase {
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
  xAmzTarget: TranslateTextXAmzTargetEnum;
}


export class TranslateTextRequest extends SpeakeasyBase {
  @Metadata()
  headers: TranslateTextHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TranslateTextRequest;
}


export class TranslateTextResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  detectedLanguageLowConfidenceException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  textSizeLimitExceededException?: any;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  translateTextResponse?: shared.TranslateTextResponse;

  @Metadata()
  unsupportedLanguagePairException?: any;
}
