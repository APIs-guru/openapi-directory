import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateIncidentRecordHeaders extends SpeakeasyBase {
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


// UpdateIncidentRecordRequestBodyChatChannel
/** 
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
export class UpdateIncidentRecordRequestBodyChatChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=chatbotSns" })
  chatbotSns?: string[];

  @Metadata({ data: "json, name=empty" })
  empty?: Map<string, any>;
}

export enum UpdateIncidentRecordRequestBodyStatusEnum {
    Open = "OPEN"
,    Resolved = "RESOLVED"
}


export class UpdateIncidentRecordRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=chatChannel" })
  chatChannel?: UpdateIncidentRecordRequestBodyChatChannel;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=impact" })
  impact?: number;

  @Metadata({ data: "json, name=notificationTargets", elemType: shared.NotificationTargetItem })
  notificationTargets?: shared.NotificationTargetItem[];

  @Metadata({ data: "json, name=status" })
  status?: UpdateIncidentRecordRequestBodyStatusEnum;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class UpdateIncidentRecordRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateIncidentRecordHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateIncidentRecordRequestBody;
}


export class UpdateIncidentRecordResponse extends SpeakeasyBase {
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
  updateIncidentRecordOutput?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
