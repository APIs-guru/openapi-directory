import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSmsChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateSmsChannelHeaders extends SpeakeasyBase {
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


// UpdateSmsChannelRequestBodySmsChannelRequest
/** 
 * Specifies the status and settings of the SMS channel for an application.
**/
export class UpdateSmsChannelRequestBodySmsChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SenderId" })
  senderId?: string;

  @SpeakeasyMetadata({ data: "json, name=ShortCode" })
  shortCode?: string;
}


export class UpdateSmsChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SMSChannelRequest" })
  smsChannelRequest: UpdateSmsChannelRequestBodySmsChannelRequest;
}


export class UpdateSmsChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSmsChannelPathParams;

  @SpeakeasyMetadata()
  headers: UpdateSmsChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSmsChannelRequestBody;
}


export class UpdateSmsChannelResponse extends SpeakeasyBase {
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
  updateSmsChannelResponse?: shared.UpdateSmsChannelResponse;
}
