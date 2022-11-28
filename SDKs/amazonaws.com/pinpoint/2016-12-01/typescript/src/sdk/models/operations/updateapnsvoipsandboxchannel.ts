import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateApnsVoipSandboxChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateApnsVoipSandboxChannelHeaders extends SpeakeasyBase {
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


// UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest
/** 
 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
**/
export class UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest extends SpeakeasyBase {
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


export class UpdateApnsVoipSandboxChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APNSVoipSandboxChannelRequest" })
  apnsVoipSandboxChannelRequest: UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest;
}


export class UpdateApnsVoipSandboxChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApnsVoipSandboxChannelPathParams;

  @SpeakeasyMetadata()
  headers: UpdateApnsVoipSandboxChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateApnsVoipSandboxChannelRequestBody;
}


export class UpdateApnsVoipSandboxChannelResponse extends SpeakeasyBase {
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
  updateApnsVoipSandboxChannelResponse?: shared.UpdateApnsVoipSandboxChannelResponse;
}
