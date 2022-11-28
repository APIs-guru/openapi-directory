import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSessionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botAliasId" })
  botAliasId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class PutSessionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ResponseContentType" })
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
}


// PutSessionRequestBodySessionState
/** 
 * The state of the user's session with Amazon Lex V2.
**/
export class PutSessionRequestBodySessionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeContexts", elemType: shared.ActiveContext })
  activeContexts?: shared.ActiveContext[];

  @SpeakeasyMetadata({ data: "json, name=dialogAction" })
  dialogAction?: shared.DialogAction;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: shared.Intent;

  @SpeakeasyMetadata({ data: "json, name=originatingRequestId" })
  originatingRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionAttributes" })
  sessionAttributes?: Map<string, string>;
}


export class PutSessionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata({ data: "json, name=requestAttributes" })
  requestAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sessionState" })
  sessionState: PutSessionRequestBodySessionState;
}


export class PutSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSessionPathParams;

  @SpeakeasyMetadata()
  headers: PutSessionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutSessionRequestBody;
}


export class PutSessionResponse extends SpeakeasyBase {
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
  putSessionResponse?: shared.PutSessionResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
