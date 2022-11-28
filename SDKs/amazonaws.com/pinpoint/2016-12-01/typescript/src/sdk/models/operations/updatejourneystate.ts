import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateJourneyStatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=journey-id" })
  journeyId: string;
}


export class UpdateJourneyStateHeaders extends SpeakeasyBase {
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


// UpdateJourneyStateRequestBodyJourneyStateRequest
/** 
 * Changes the status of a journey.
**/
export class UpdateJourneyStateRequestBodyJourneyStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: shared.StateEnum;
}


export class UpdateJourneyStateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JourneyStateRequest" })
  journeyStateRequest: UpdateJourneyStateRequestBodyJourneyStateRequest;
}


export class UpdateJourneyStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateJourneyStatePathParams;

  @SpeakeasyMetadata()
  headers: UpdateJourneyStateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateJourneyStateRequestBody;
}


export class UpdateJourneyStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

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
  updateJourneyStateResponse?: shared.UpdateJourneyStateResponse;
}
