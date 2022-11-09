import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botAliasId" })
  botAliasId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class PutSessionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=ResponseContentType" })
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
}


// PutSessionRequestBodySessionState
/** 
 * The state of the user's session with Amazon Lex V2.
**/
export class PutSessionRequestBodySessionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeContexts", elemType: shared.ActiveContext })
  activeContexts?: shared.ActiveContext[];

  @Metadata({ data: "json, name=dialogAction" })
  dialogAction?: shared.DialogAction;

  @Metadata({ data: "json, name=intent" })
  intent?: shared.Intent;

  @Metadata({ data: "json, name=originatingRequestId" })
  originatingRequestId?: string;

  @Metadata({ data: "json, name=sessionAttributes" })
  sessionAttributes?: Map<string, string>;
}


export class PutSessionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: shared.Message[];

  @Metadata({ data: "json, name=requestAttributes" })
  requestAttributes?: Map<string, string>;

  @Metadata({ data: "json, name=sessionState" })
  sessionState: PutSessionRequestBodySessionState;
}


export class PutSessionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSessionPathParams;

  @Metadata()
  headers: PutSessionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutSessionRequestBody;
}


export class PutSessionResponse extends SpeakeasyBase {
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
  putSessionResponse?: shared.PutSessionResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
