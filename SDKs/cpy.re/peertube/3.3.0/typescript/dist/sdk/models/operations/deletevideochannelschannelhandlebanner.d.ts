import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoChannelsChannelHandleBannerPathParams extends SpeakeasyBase {
    channelHandle: string;
}
export declare class DeleteVideoChannelsChannelHandleBannerSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteVideoChannelsChannelHandleBannerRequest extends SpeakeasyBase {
    pathParams: DeleteVideoChannelsChannelHandleBannerPathParams;
    security: DeleteVideoChannelsChannelHandleBannerSecurity;
}
export declare class DeleteVideoChannelsChannelHandleBannerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
