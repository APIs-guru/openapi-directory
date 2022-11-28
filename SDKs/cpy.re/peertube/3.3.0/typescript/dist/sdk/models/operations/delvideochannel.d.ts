import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DelVideoChannelPathParams extends SpeakeasyBase {
    channelHandle: string;
}
export declare class DelVideoChannelSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DelVideoChannelRequest extends SpeakeasyBase {
    pathParams: DelVideoChannelPathParams;
    security: DelVideoChannelSecurity;
}
export declare class DelVideoChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
