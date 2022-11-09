import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateVoiceChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateVoiceChannelHeaders extends SpeakeasyBase {
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


// UpdateVoiceChannelRequestBodyVoiceChannelRequest
/** 
 * Specifies the status and settings of the voice channel for an application.
**/
export class UpdateVoiceChannelRequestBodyVoiceChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}


export class UpdateVoiceChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=VoiceChannelRequest" })
  voiceChannelRequest: UpdateVoiceChannelRequestBodyVoiceChannelRequest;
}


export class UpdateVoiceChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateVoiceChannelPathParams;

  @Metadata()
  headers: UpdateVoiceChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateVoiceChannelRequestBody;
}


export class UpdateVoiceChannelResponse extends SpeakeasyBase {
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
  updateVoiceChannelResponse?: shared.UpdateVoiceChannelResponse;
}
