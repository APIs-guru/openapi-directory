import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateIncidentRecordHeaders extends SpeakeasyBase {
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


// UpdateIncidentRecordRequestBodyChatChannel
/** 
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
export class UpdateIncidentRecordRequestBodyChatChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chatbotSns" })
  chatbotSns?: string[];

  @SpeakeasyMetadata({ data: "json, name=empty" })
  empty?: Map<string, any>;
}

export enum UpdateIncidentRecordRequestBodyStatusEnum {
    Open = "OPEN",
    Resolved = "RESOLVED"
}


export class UpdateIncidentRecordRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=chatChannel" })
  chatChannel?: UpdateIncidentRecordRequestBodyChatChannel;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=impact" })
  impact?: number;

  @SpeakeasyMetadata({ data: "json, name=notificationTargets", elemType: shared.NotificationTargetItem })
  notificationTargets?: shared.NotificationTargetItem[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdateIncidentRecordRequestBodyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class UpdateIncidentRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateIncidentRecordHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateIncidentRecordRequestBody;
}


export class UpdateIncidentRecordResponse extends SpeakeasyBase {
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
  updateIncidentRecordOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
