import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateResponsePlanHeaders extends SpeakeasyBase {
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


// CreateResponsePlanRequestBodyChatChannel
/** 
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
export class CreateResponsePlanRequestBodyChatChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=chatbotSns" })
  chatbotSns?: string[];

  @Metadata({ data: "json, name=empty" })
  empty?: Map<string, any>;
}


// CreateResponsePlanRequestBodyIncidentTemplate
/** 
 * Basic details used in creating a response plan. The response plan is then used to create an incident record.
**/
export class CreateResponsePlanRequestBodyIncidentTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=dedupeString" })
  dedupeString?: string;

  @Metadata({ data: "json, name=impact" })
  impact?: number;

  @Metadata({ data: "json, name=notificationTargets", elemType: shared.NotificationTargetItem })
  notificationTargets?: shared.NotificationTargetItem[];

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class CreateResponsePlanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: shared.Action[];

  @Metadata({ data: "json, name=chatChannel" })
  chatChannel?: CreateResponsePlanRequestBodyChatChannel;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=engagements" })
  engagements?: string[];

  @Metadata({ data: "json, name=incidentTemplate" })
  incidentTemplate: CreateResponsePlanRequestBodyIncidentTemplate;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateResponsePlanRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateResponsePlanHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateResponsePlanRequestBody;
}


export class CreateResponsePlanResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createResponsePlanOutput?: shared.CreateResponsePlanOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
