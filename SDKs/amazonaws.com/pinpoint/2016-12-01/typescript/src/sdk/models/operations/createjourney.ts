import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateJourneyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class CreateJourneyHeaders extends SpeakeasyBase {
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


// CreateJourneyRequestBodyWriteJourneyRequest
/** 
 * Specifies the configuration and other settings for a journey.
**/
export class CreateJourneyRequestBodyWriteJourneyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Activities", elemType: shared.Activity })
  activities?: Map<string, shared.Activity>;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @Metadata({ data: "json, name=Limits" })
  limits?: shared.JourneyLimits;

  @Metadata({ data: "json, name=LocalTime" })
  localTime?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=QuietTime" })
  quietTime?: shared.QuietTime;

  @Metadata({ data: "json, name=RefreshFrequency" })
  refreshFrequency?: string;

  @Metadata({ data: "json, name=RefreshOnSegmentUpdate" })
  refreshOnSegmentUpdate?: boolean;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: shared.JourneySchedule;

  @Metadata({ data: "json, name=StartActivity" })
  startActivity?: string;

  @Metadata({ data: "json, name=StartCondition" })
  startCondition?: shared.StartCondition;

  @Metadata({ data: "json, name=State" })
  state?: shared.StateEnum;

  @Metadata({ data: "json, name=WaitForQuietTime" })
  waitForQuietTime?: boolean;
}


export class CreateJourneyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=WriteJourneyRequest" })
  writeJourneyRequest: CreateJourneyRequestBodyWriteJourneyRequest;
}


export class CreateJourneyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateJourneyPathParams;

  @Metadata()
  headers: CreateJourneyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateJourneyRequestBody;
}


export class CreateJourneyResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createJourneyResponse?: shared.CreateJourneyResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
