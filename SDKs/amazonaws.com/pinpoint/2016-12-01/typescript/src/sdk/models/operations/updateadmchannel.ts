import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAdmChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateAdmChannelHeaders extends SpeakeasyBase {
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


// UpdateAdmChannelRequestBodyAdmChannelRequest
/** 
 * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
**/
export class UpdateAdmChannelRequestBodyAdmChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=ClientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}


export class UpdateAdmChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ADMChannelRequest" })
  admChannelRequest: UpdateAdmChannelRequestBodyAdmChannelRequest;
}


export class UpdateAdmChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAdmChannelPathParams;

  @Metadata()
  headers: UpdateAdmChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAdmChannelRequestBody;
}


export class UpdateAdmChannelResponse extends SpeakeasyBase {
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
  updateAdmChannelResponse?: shared.UpdateAdmChannelResponse;
}
