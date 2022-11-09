import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateApnsVoipChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateApnsVoipChannelHeaders extends SpeakeasyBase {
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


// UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest
/** 
 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
**/
export class UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=Certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=DefaultAuthenticationMethod" })
  defaultAuthenticationMethod?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=PrivateKey" })
  privateKey?: string;

  @Metadata({ data: "json, name=TeamId" })
  teamId?: string;

  @Metadata({ data: "json, name=TokenKey" })
  tokenKey?: string;

  @Metadata({ data: "json, name=TokenKeyId" })
  tokenKeyId?: string;
}


export class UpdateApnsVoipChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSVoipChannelRequest" })
  apnsVoipChannelRequest: UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest;
}


export class UpdateApnsVoipChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateApnsVoipChannelPathParams;

  @Metadata()
  headers: UpdateApnsVoipChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateApnsVoipChannelRequestBody;
}


export class UpdateApnsVoipChannelResponse extends SpeakeasyBase {
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
  updateApnsVoipChannelResponse?: shared.UpdateApnsVoipChannelResponse;
}
