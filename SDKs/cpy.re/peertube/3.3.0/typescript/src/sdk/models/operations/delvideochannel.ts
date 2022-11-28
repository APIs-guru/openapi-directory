import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DelVideoChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelHandle" })
  channelHandle: string;
}


export class DelVideoChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DelVideoChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DelVideoChannelPathParams;

  @SpeakeasyMetadata()
  security: DelVideoChannelSecurity;
}


export class DelVideoChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
