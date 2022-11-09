import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartDeviceAuthorizationHeaders extends SpeakeasyBase {
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


export class StartDeviceAuthorizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @Metadata({ data: "json, name=startUrl" })
  startUrl: string;
}


export class StartDeviceAuthorizationRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartDeviceAuthorizationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartDeviceAuthorizationRequestBody;
}


export class StartDeviceAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidClientException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  slowDownException?: any;

  @Metadata()
  startDeviceAuthorizationResponse?: shared.StartDeviceAuthorizationResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedClientException?: any;
}
