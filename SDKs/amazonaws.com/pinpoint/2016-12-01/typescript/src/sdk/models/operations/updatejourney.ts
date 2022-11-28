import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateJourneyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=journey-id" })
  journeyId: string;
}


export class UpdateJourneyHeaders extends SpeakeasyBase {
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


// UpdateJourneyRequestBodyWriteJourneyRequest
/** 
 * Specifies the configuration and other settings for a journey.
**/
export class UpdateJourneyRequestBodyWriteJourneyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Activities", elemType: shared.Activity })
  activities?: Map<string, shared.Activity>;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Limits" })
  limits?: shared.JourneyLimits;

  @SpeakeasyMetadata({ data: "json, name=LocalTime" })
  localTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=QuietTime" })
  quietTime?: shared.QuietTime;

  @SpeakeasyMetadata({ data: "json, name=RefreshFrequency" })
  refreshFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=RefreshOnSegmentUpdate" })
  refreshOnSegmentUpdate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: shared.JourneySchedule;

  @SpeakeasyMetadata({ data: "json, name=StartActivity" })
  startActivity?: string;

  @SpeakeasyMetadata({ data: "json, name=StartCondition" })
  startCondition?: shared.StartCondition;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: shared.StateEnum;

  @SpeakeasyMetadata({ data: "json, name=WaitForQuietTime" })
  waitForQuietTime?: boolean;
}


export class UpdateJourneyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WriteJourneyRequest" })
  writeJourneyRequest: UpdateJourneyRequestBodyWriteJourneyRequest;
}


export class UpdateJourneyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateJourneyPathParams;

  @SpeakeasyMetadata()
  headers: UpdateJourneyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateJourneyRequestBody;
}


export class UpdateJourneyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateJourneyResponse?: shared.UpdateJourneyResponse;
}
