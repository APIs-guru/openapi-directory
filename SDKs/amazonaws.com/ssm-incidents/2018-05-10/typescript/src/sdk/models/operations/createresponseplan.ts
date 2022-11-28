import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateResponsePlanHeaders extends SpeakeasyBase {
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


// CreateResponsePlanRequestBodyChatChannel
/** 
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
export class CreateResponsePlanRequestBodyChatChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chatbotSns" })
  chatbotSns?: string[];

  @SpeakeasyMetadata({ data: "json, name=empty" })
  empty?: Map<string, any>;
}


// CreateResponsePlanRequestBodyIncidentTemplate
/** 
 * Basic details used in creating a response plan. The response plan is then used to create an incident record.
**/
export class CreateResponsePlanRequestBodyIncidentTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dedupeString" })
  dedupeString?: string;

  @SpeakeasyMetadata({ data: "json, name=impact" })
  impact?: number;

  @SpeakeasyMetadata({ data: "json, name=notificationTargets", elemType: shared.NotificationTargetItem })
  notificationTargets?: shared.NotificationTargetItem[];

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class CreateResponsePlanRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: shared.Action[];

  @SpeakeasyMetadata({ data: "json, name=chatChannel" })
  chatChannel?: CreateResponsePlanRequestBodyChatChannel;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=engagements" })
  engagements?: string[];

  @SpeakeasyMetadata({ data: "json, name=incidentTemplate" })
  incidentTemplate: CreateResponsePlanRequestBodyIncidentTemplate;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateResponsePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateResponsePlanHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateResponsePlanRequestBody;
}


export class CreateResponsePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createResponsePlanOutput?: shared.CreateResponsePlanOutput;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
