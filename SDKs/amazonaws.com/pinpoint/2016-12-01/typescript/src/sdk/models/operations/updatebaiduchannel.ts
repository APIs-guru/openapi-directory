import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBaiduChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateBaiduChannelHeaders extends SpeakeasyBase {
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


// UpdateBaiduChannelRequestBodyBaiduChannelRequest
/** 
 * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
**/
export class UpdateBaiduChannelRequestBodyBaiduChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=SecretKey" })
  secretKey?: string;
}


export class UpdateBaiduChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaiduChannelRequest" })
  baiduChannelRequest: UpdateBaiduChannelRequestBodyBaiduChannelRequest;
}


export class UpdateBaiduChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBaiduChannelPathParams;

  @Metadata()
  headers: UpdateBaiduChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateBaiduChannelRequestBody;
}


export class UpdateBaiduChannelResponse extends SpeakeasyBase {
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
  updateBaiduChannelResponse?: shared.UpdateBaiduChannelResponse;
}
