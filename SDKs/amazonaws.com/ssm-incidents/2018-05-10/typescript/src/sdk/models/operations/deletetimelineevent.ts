import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTimelineEventHeaders extends SpeakeasyBase {
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


export class DeleteTimelineEventRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventId" })
  eventId: string;

  @Metadata({ data: "json, name=incidentRecordArn" })
  incidentRecordArn: string;
}


export class DeleteTimelineEventRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteTimelineEventHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteTimelineEventRequestBody;
}


export class DeleteTimelineEventResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteTimelineEventOutput?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
