import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVideoChannelsChannelHandleAvatarPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelHandle" })
  channelHandle: string;
}


export class DeleteVideoChannelsChannelHandleAvatarSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteVideoChannelsChannelHandleAvatarRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVideoChannelsChannelHandleAvatarPathParams;

  @Metadata()
  security: DeleteVideoChannelsChannelHandleAvatarSecurity;
}


export class DeleteVideoChannelsChannelHandleAvatarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
