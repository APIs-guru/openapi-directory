import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIceServerConfigHeaders extends SpeakeasyBase {
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

export enum GetIceServerConfigRequestBodyServiceEnum {
    Turn = "TURN"
}


export class GetIceServerConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelARN" })
  channelArn: string;

  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=Service" })
  service?: GetIceServerConfigRequestBodyServiceEnum;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}


export class GetIceServerConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetIceServerConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetIceServerConfigRequestBody;
}


export class GetIceServerConfigResponse extends SpeakeasyBase {
  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getIceServerConfigResponse?: shared.GetIceServerConfigResponse;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidClientException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  sessionExpiredException?: any;

  @Metadata()
  statusCode: number;
}
