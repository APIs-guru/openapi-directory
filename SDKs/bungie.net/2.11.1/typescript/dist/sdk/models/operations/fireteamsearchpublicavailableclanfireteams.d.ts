import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FireteamSearchPublicAvailableClanFireteamsPathParams extends SpeakeasyBase {
    activityType: number;
    dateRange: number;
    page: number;
    platform: number;
    slotFilter: number;
}
export declare class FireteamSearchPublicAvailableClanFireteamsQueryParams extends SpeakeasyBase {
    langFilter?: string;
}
export declare class FireteamSearchPublicAvailableClanFireteamsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class FireteamSearchPublicAvailableClanFireteamsRequest extends SpeakeasyBase {
    pathParams: FireteamSearchPublicAvailableClanFireteamsPathParams;
    queryParams: FireteamSearchPublicAvailableClanFireteamsQueryParams;
    security: FireteamSearchPublicAvailableClanFireteamsSecurity;
}
export declare class FireteamSearchPublicAvailableClanFireteamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
