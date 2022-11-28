import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutVideoChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelHandle" })
  channelHandle: string;
}


export class PutVideoChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutVideoChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutVideoChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.VideoChannelUpdateInput;

  @SpeakeasyMetadata()
  security: PutVideoChannelSecurity;
}


export class PutVideoChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
