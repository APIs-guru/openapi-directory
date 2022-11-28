import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutVideoChannelPathParams extends SpeakeasyBase {
    channelHandle: string;
}
export declare class PutVideoChannelSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutVideoChannelRequest extends SpeakeasyBase {
    pathParams: PutVideoChannelPathParams;
    request?: shared.VideoChannelUpdateInput;
    security: PutVideoChannelSecurity;
}
export declare class PutVideoChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
