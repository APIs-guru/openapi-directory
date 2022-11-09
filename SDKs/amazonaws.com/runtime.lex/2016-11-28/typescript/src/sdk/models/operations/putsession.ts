import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botAlias" })
  botAlias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botName" })
  botName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PutSessionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;

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


// PutSessionRequestBodyDialogAction
/** 
 * Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
**/
export class PutSessionRequestBodyDialogAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=fulfillmentState" })
  fulfillmentState?: shared.FulfillmentStateEnum;

  @Metadata({ data: "json, name=intentName" })
  intentName?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=messageFormat" })
  messageFormat?: shared.MessageFormatTypeEnum;

  @Metadata({ data: "json, name=slotToElicit" })
  slotToElicit?: string;

  @Metadata({ data: "json, name=slots" })
  slots?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: shared.DialogActionTypeEnum;
}


export class PutSessionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeContexts", elemType: shared.ActiveContext })
  activeContexts?: shared.ActiveContext[];

  @Metadata({ data: "json, name=dialogAction" })
  dialogAction?: PutSessionRequestBodyDialogAction;

  @Metadata({ data: "json, name=recentIntentSummaryView", elemType: shared.IntentSummary })
  recentIntentSummaryView?: shared.IntentSummary[];

  @Metadata({ data: "json, name=sessionAttributes" })
  sessionAttributes?: Map<string, string>;
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
  badGatewayException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dependencyFailedException?: any;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notAcceptableException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putSessionResponse?: shared.PutSessionResponse;

  @Metadata()
  statusCode: number;
}
