import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateEmailChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateEmailChannelHeaders extends SpeakeasyBase {
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


// UpdateEmailChannelRequestBodyEmailChannelRequest
/** 
 * Specifies the status and settings of the email channel for an application.
**/
export class UpdateEmailChannelRequestBodyEmailChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationSet" })
  configurationSet?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FromAddress" })
  fromAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}


export class UpdateEmailChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailChannelRequest" })
  emailChannelRequest: UpdateEmailChannelRequestBodyEmailChannelRequest;
}


export class UpdateEmailChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEmailChannelPathParams;

  @SpeakeasyMetadata()
  headers: UpdateEmailChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateEmailChannelRequestBody;
}


export class UpdateEmailChannelResponse extends SpeakeasyBase {
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
  updateEmailChannelResponse?: shared.UpdateEmailChannelResponse;
}
