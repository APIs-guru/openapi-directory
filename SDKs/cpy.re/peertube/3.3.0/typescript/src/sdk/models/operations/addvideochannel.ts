import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideoChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddVideoChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.VideoChannelCreate;

  @Metadata()
  security: AddVideoChannelSecurity;
}


export class AddVideoChannel204ApplicationJsonVideoChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: Map<string, any>;
}


export class AddVideoChannel204ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=videoChannel" })
  videoChannel?: AddVideoChannel204ApplicationJsonVideoChannel;
}


export class AddVideoChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addVideoChannel204ApplicationJsonObject?: AddVideoChannel204ApplicationJson;
}
