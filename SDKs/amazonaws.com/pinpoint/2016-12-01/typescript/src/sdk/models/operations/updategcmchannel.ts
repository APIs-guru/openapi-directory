import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGcmChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateGcmChannelHeaders extends SpeakeasyBase {
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


// UpdateGcmChannelRequestBodyGcmChannelRequest
/** 
 * Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
**/
export class UpdateGcmChannelRequestBodyGcmChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}


export class UpdateGcmChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=GCMChannelRequest" })
  gcmChannelRequest: UpdateGcmChannelRequestBodyGcmChannelRequest;
}


export class UpdateGcmChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGcmChannelPathParams;

  @Metadata()
  headers: UpdateGcmChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateGcmChannelRequestBody;
}


export class UpdateGcmChannelResponse extends SpeakeasyBase {
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
  updateGcmChannelResponse?: shared.UpdateGcmChannelResponse;
}
