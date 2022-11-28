import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSessionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botAlias" })
  botAlias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botName" })
  botName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PutSessionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;

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


// PutSessionRequestBodyDialogAction
/** 
 * Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
**/
export class PutSessionRequestBodyDialogAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fulfillmentState" })
  fulfillmentState?: shared.FulfillmentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=intentName" })
  intentName?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=messageFormat" })
  messageFormat?: shared.MessageFormatTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=slotToElicit" })
  slotToElicit?: string;

  @SpeakeasyMetadata({ data: "json, name=slots" })
  slots?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: shared.DialogActionTypeEnum;
}


export class PutSessionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeContexts", elemType: shared.ActiveContext })
  activeContexts?: shared.ActiveContext[];

  @SpeakeasyMetadata({ data: "json, name=dialogAction" })
  dialogAction?: PutSessionRequestBodyDialogAction;

  @SpeakeasyMetadata({ data: "json, name=recentIntentSummaryView", elemType: shared.IntentSummary })
  recentIntentSummaryView?: shared.IntentSummary[];

  @SpeakeasyMetadata({ data: "json, name=sessionAttributes" })
  sessionAttributes?: Map<string, string>;
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
  badGatewayException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyFailedException?: any;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notAcceptableException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  putSessionResponse?: shared.PutSessionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
