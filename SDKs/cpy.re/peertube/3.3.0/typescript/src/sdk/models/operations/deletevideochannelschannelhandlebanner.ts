import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVideoChannelsChannelHandleBannerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelHandle" })
  channelHandle: string;
}


export class DeleteVideoChannelsChannelHandleBannerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteVideoChannelsChannelHandleBannerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVideoChannelsChannelHandleBannerPathParams;

  @Metadata()
  security: DeleteVideoChannelsChannelHandleBannerSecurity;
}


export class DeleteVideoChannelsChannelHandleBannerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
