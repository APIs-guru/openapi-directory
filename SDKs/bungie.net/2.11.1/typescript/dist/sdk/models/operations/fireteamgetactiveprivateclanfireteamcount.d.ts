import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FireteamGetActivePrivateClanFireteamCountPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class FireteamGetActivePrivateClanFireteamCountSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class FireteamGetActivePrivateClanFireteamCountRequest extends SpeakeasyBase {
    pathParams: FireteamGetActivePrivateClanFireteamCountPathParams;
    security: FireteamGetActivePrivateClanFireteamCountSecurity;
}
export declare class FireteamGetActivePrivateClanFireteamCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
