import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIceServerConfigHeaders extends SpeakeasyBase {
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

export enum GetIceServerConfigRequestBodyServiceEnum {
    Turn = "TURN"
}


export class GetIceServerConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelARN" })
  channelArn: string;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: GetIceServerConfigRequestBodyServiceEnum;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}


export class GetIceServerConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetIceServerConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetIceServerConfigRequestBody;
}


export class GetIceServerConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getIceServerConfigResponse?: shared.GetIceServerConfigResponse;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  invalidClientException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  sessionExpiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
