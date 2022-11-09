import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateResponsePlanHeaders extends SpeakeasyBase {
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


// UpdateResponsePlanRequestBodyChatChannel
/** 
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
export class UpdateResponsePlanRequestBodyChatChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=chatbotSns" })
  chatbotSns?: string[];

  @Metadata({ data: "json, name=empty" })
  empty?: Map<string, any>;
}


export class UpdateResponsePlanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: shared.Action[];

  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=chatChannel" })
  chatChannel?: UpdateResponsePlanRequestBodyChatChannel;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=engagements" })
  engagements?: string[];

  @Metadata({ data: "json, name=incidentTemplateDedupeString" })
  incidentTemplateDedupeString?: string;

  @Metadata({ data: "json, name=incidentTemplateImpact" })
  incidentTemplateImpact?: number;

  @Metadata({ data: "json, name=incidentTemplateNotificationTargets", elemType: shared.NotificationTargetItem })
  incidentTemplateNotificationTargets?: shared.NotificationTargetItem[];

  @Metadata({ data: "json, name=incidentTemplateSummary" })
  incidentTemplateSummary?: string;

  @Metadata({ data: "json, name=incidentTemplateTitle" })
  incidentTemplateTitle?: string;
}


export class UpdateResponsePlanRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateResponsePlanHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateResponsePlanRequestBody;
}


export class UpdateResponsePlanResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateResponsePlanOutput?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
