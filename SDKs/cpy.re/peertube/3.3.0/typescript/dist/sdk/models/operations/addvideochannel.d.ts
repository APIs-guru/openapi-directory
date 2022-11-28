import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoChannelSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AddVideoChannel204ApplicationJsonVideoChannel extends SpeakeasyBase {
    id?: Map<string, any>;
}
export declare class AddVideoChannel204ApplicationJson extends SpeakeasyBase {
    videoChannel?: AddVideoChannel204ApplicationJsonVideoChannel;
}
export declare class AddVideoChannelRequest extends SpeakeasyBase {
    request?: shared.VideoChannelCreateInput;
    security: AddVideoChannelSecurity;
}
export declare class AddVideoChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addVideoChannel204ApplicationJsonObject?: AddVideoChannel204ApplicationJson;
}
