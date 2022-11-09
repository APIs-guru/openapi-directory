import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutVideoChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelHandle" })
  channelHandle: string;
}


export class PutVideoChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutVideoChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutVideoChannelPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.VideoChannelUpdate;

  @Metadata()
  security: PutVideoChannelSecurity;
}


export class PutVideoChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
