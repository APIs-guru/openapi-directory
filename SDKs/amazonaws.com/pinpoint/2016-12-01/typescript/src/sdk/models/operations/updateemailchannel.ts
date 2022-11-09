import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEmailChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateEmailChannelHeaders extends SpeakeasyBase {
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


// UpdateEmailChannelRequestBodyEmailChannelRequest
/** 
 * Specifies the status and settings of the email channel for an application.
**/
export class UpdateEmailChannelRequestBodyEmailChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationSet" })
  configurationSet?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=FromAddress" })
  fromAddress?: string;

  @Metadata({ data: "json, name=Identity" })
  identity?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}


export class UpdateEmailChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailChannelRequest" })
  emailChannelRequest: UpdateEmailChannelRequestBodyEmailChannelRequest;
}


export class UpdateEmailChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEmailChannelPathParams;

  @Metadata()
  headers: UpdateEmailChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateEmailChannelRequestBody;
}


export class UpdateEmailChannelResponse extends SpeakeasyBase {
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
  updateEmailChannelResponse?: shared.UpdateEmailChannelResponse;
}
