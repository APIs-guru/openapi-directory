import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateJourneyStatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=journey-id" })
  journeyId: string;
}


export class UpdateJourneyStateHeaders extends SpeakeasyBase {
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


// UpdateJourneyStateRequestBodyJourneyStateRequest
/** 
 * Changes the status of a journey.
**/
export class UpdateJourneyStateRequestBodyJourneyStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: shared.StateEnum;
}


export class UpdateJourneyStateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=JourneyStateRequest" })
  journeyStateRequest: UpdateJourneyStateRequestBodyJourneyStateRequest;
}


export class UpdateJourneyStateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateJourneyStatePathParams;

  @Metadata()
  headers: UpdateJourneyStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateJourneyStateRequestBody;
}


export class UpdateJourneyStateResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

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

  @Metadata()
  updateJourneyStateResponse?: shared.UpdateJourneyStateResponse;
}
