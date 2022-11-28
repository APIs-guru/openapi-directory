import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideoChannelsChannelHandleBannerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelHandle" })
  channelHandle: string;
}


export class DeleteVideoChannelsChannelHandleBannerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteVideoChannelsChannelHandleBannerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideoChannelsChannelHandleBannerPathParams;

  @SpeakeasyMetadata()
  security: DeleteVideoChannelsChannelHandleBannerSecurity;
}


export class DeleteVideoChannelsChannelHandleBannerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
