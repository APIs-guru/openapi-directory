import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBaiduChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateBaiduChannelHeaders extends SpeakeasyBase {
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


// UpdateBaiduChannelRequestBodyBaiduChannelRequest
/** 
 * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
**/
export class UpdateBaiduChannelRequestBodyBaiduChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SecretKey" })
  secretKey?: string;
}


export class UpdateBaiduChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaiduChannelRequest" })
  baiduChannelRequest: UpdateBaiduChannelRequestBodyBaiduChannelRequest;
}


export class UpdateBaiduChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBaiduChannelPathParams;

  @SpeakeasyMetadata()
  headers: UpdateBaiduChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateBaiduChannelRequestBody;
}


export class UpdateBaiduChannelResponse extends SpeakeasyBase {
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
  updateBaiduChannelResponse?: shared.UpdateBaiduChannelResponse;
}
