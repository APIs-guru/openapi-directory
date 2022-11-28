import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoChannelsChannelHandleAvatarPathParams extends SpeakeasyBase {
    channelHandle: string;
}
export declare class DeleteVideoChannelsChannelHandleAvatarSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteVideoChannelsChannelHandleAvatarRequest extends SpeakeasyBase {
    pathParams: DeleteVideoChannelsChannelHandleAvatarPathParams;
    security: DeleteVideoChannelsChannelHandleAvatarSecurity;
}
export declare class DeleteVideoChannelsChannelHandleAvatarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
