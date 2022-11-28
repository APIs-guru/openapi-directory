import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateResponsePlanHeaders extends SpeakeasyBase {
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


// UpdateResponsePlanRequestBodyChatChannel
/** 
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
export class UpdateResponsePlanRequestBodyChatChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chatbotSns" })
  chatbotSns?: string[];

  @SpeakeasyMetadata({ data: "json, name=empty" })
  empty?: Map<string, any>;
}


export class UpdateResponsePlanRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: shared.Action[];

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=chatChannel" })
  chatChannel?: UpdateResponsePlanRequestBodyChatChannel;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=engagements" })
  engagements?: string[];

  @SpeakeasyMetadata({ data: "json, name=incidentTemplateDedupeString" })
  incidentTemplateDedupeString?: string;

  @SpeakeasyMetadata({ data: "json, name=incidentTemplateImpact" })
  incidentTemplateImpact?: number;

  @SpeakeasyMetadata({ data: "json, name=incidentTemplateNotificationTargets", elemType: shared.NotificationTargetItem })
  incidentTemplateNotificationTargets?: shared.NotificationTargetItem[];

  @SpeakeasyMetadata({ data: "json, name=incidentTemplateSummary" })
  incidentTemplateSummary?: string;

  @SpeakeasyMetadata({ data: "json, name=incidentTemplateTitle" })
  incidentTemplateTitle?: string;
}


export class UpdateResponsePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateResponsePlanHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateResponsePlanRequestBody;
}


export class UpdateResponsePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateResponsePlanOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
