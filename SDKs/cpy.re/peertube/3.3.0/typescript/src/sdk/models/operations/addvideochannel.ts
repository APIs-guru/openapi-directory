import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddVideoChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddVideoChannel204ApplicationJsonVideoChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: Map<string, any>;
}


export class AddVideoChannel204ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videoChannel" })
  videoChannel?: AddVideoChannel204ApplicationJsonVideoChannel;
}


export class AddVideoChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.VideoChannelCreateInput;

  @SpeakeasyMetadata()
  security: AddVideoChannelSecurity;
}


export class AddVideoChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addVideoChannel204ApplicationJsonObject?: AddVideoChannel204ApplicationJson;
}
