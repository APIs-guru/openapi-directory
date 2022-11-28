import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FireteamGetClanFireteamPathParams extends SpeakeasyBase {
    fireteamId: number;
    groupId: number;
}
export declare class FireteamGetClanFireteamSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class FireteamGetClanFireteamRequest extends SpeakeasyBase {
    pathParams: FireteamGetClanFireteamPathParams;
    security: FireteamGetClanFireteamSecurity;
}
export declare class FireteamGetClanFireteamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
