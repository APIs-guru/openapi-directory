import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FireteamGetAvailableClanFireteamsPathParams extends SpeakeasyBase {
    activityType: number;
    dateRange: number;
    groupId: number;
    page: number;
    platform: number;
    publicOnly: number;
    slotFilter: number;
}
export declare class FireteamGetAvailableClanFireteamsQueryParams extends SpeakeasyBase {
    langFilter?: string;
}
export declare class FireteamGetAvailableClanFireteamsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class FireteamGetAvailableClanFireteamsRequest extends SpeakeasyBase {
    pathParams: FireteamGetAvailableClanFireteamsPathParams;
    queryParams: FireteamGetAvailableClanFireteamsQueryParams;
    security: FireteamGetAvailableClanFireteamsSecurity;
}
export declare class FireteamGetAvailableClanFireteamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
