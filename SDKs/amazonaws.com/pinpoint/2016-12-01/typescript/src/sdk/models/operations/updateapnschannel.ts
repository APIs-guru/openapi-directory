import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateApnsChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateApnsChannelHeaders extends SpeakeasyBase {
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


// UpdateApnsChannelRequestBodyApnsChannelRequest
/** 
 * Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
**/
export class UpdateApnsChannelRequestBodyApnsChannelRequest extends SpeakeasyBase {
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


export class UpdateApnsChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSChannelRequest" })
  apnsChannelRequest: UpdateApnsChannelRequestBodyApnsChannelRequest;
}


export class UpdateApnsChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateApnsChannelPathParams;

  @Metadata()
  headers: UpdateApnsChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateApnsChannelRequestBody;
}


export class UpdateApnsChannelResponse extends SpeakeasyBase {
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
  updateApnsChannelResponse?: shared.UpdateApnsChannelResponse;
}
