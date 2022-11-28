import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideoChannelsChannelHandleAvatarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelHandle" })
  channelHandle: string;
}


export class DeleteVideoChannelsChannelHandleAvatarSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteVideoChannelsChannelHandleAvatarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideoChannelsChannelHandleAvatarPathParams;

  @SpeakeasyMetadata()
  security: DeleteVideoChannelsChannelHandleAvatarSecurity;
}


export class DeleteVideoChannelsChannelHandleAvatarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
