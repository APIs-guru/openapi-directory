import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecognizeUtterancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botAliasId" })
  botAliasId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class RecognizeUtteranceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Response-Content-Type" })
  responseContentType?: string;

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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-lex-request-attributes" })
  xAmzLexRequestAttributes?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-lex-session-state" })
  xAmzLexSessionState?: string;
}


export class RecognizeUtteranceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputStream" })
  inputStream?: string;
}


export class RecognizeUtteranceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecognizeUtterancePathParams;

  @SpeakeasyMetadata()
  headers: RecognizeUtteranceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RecognizeUtteranceRequestBody;
}


export class RecognizeUtteranceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badGatewayException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyFailedException?: any;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  recognizeUtteranceResponse?: shared.RecognizeUtteranceResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
