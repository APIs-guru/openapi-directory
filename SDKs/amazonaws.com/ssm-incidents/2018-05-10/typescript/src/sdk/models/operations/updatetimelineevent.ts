import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateTimelineEventHeaders extends SpeakeasyBase {
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


export class UpdateTimelineEventRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=eventData" })
  eventData?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId: string;

  @Metadata({ data: "json, name=eventTime" })
  eventTime?: Date;

  @Metadata({ data: "json, name=eventType" })
  eventType?: string;

  @Metadata({ data: "json, name=incidentRecordArn" })
  incidentRecordArn: string;
}


export class UpdateTimelineEventRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateTimelineEventHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateTimelineEventRequestBody;
}


export class UpdateTimelineEventResponse extends SpeakeasyBase {
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
  updateTimelineEventOutput?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
