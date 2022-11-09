import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecognizeUtterancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botAliasId" })
  botAliasId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class RecognizeUtteranceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Response-Content-Type" })
  responseContentType?: string;

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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-lex-request-attributes" })
  xAmzLexRequestAttributes?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-lex-session-state" })
  xAmzLexSessionState?: string;
}


export class RecognizeUtteranceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputStream" })
  inputStream?: string;
}


export class RecognizeUtteranceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RecognizeUtterancePathParams;

  @Metadata()
  headers: RecognizeUtteranceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RecognizeUtteranceRequestBody;
}


export class RecognizeUtteranceResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badGatewayException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dependencyFailedException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  recognizeUtteranceResponse?: shared.RecognizeUtteranceResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
