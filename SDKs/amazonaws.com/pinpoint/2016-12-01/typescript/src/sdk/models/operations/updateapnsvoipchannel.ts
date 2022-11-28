import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateApnsVoipChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateApnsVoipChannelHeaders extends SpeakeasyBase {
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


// UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest
/** 
 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
**/
export class UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultAuthenticationMethod" })
  defaultAuthenticationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PrivateKey" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=TeamId" })
  teamId?: string;

  @SpeakeasyMetadata({ data: "json, name=TokenKey" })
  tokenKey?: string;

  @SpeakeasyMetadata({ data: "json, name=TokenKeyId" })
  tokenKeyId?: string;
}


export class UpdateApnsVoipChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APNSVoipChannelRequest" })
  apnsVoipChannelRequest: UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest;
}


export class UpdateApnsVoipChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApnsVoipChannelPathParams;

  @SpeakeasyMetadata()
  headers: UpdateApnsVoipChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateApnsVoipChannelRequestBody;
}


export class UpdateApnsVoipChannelResponse extends SpeakeasyBase {
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
  updateApnsVoipChannelResponse?: shared.UpdateApnsVoipChannelResponse;
}
