import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FireteamGetMyClanFireteamsPathParams extends SpeakeasyBase {
    groupId: number;
    includeClosed: boolean;
    page: number;
    platform: number;
}
export declare class FireteamGetMyClanFireteamsQueryParams extends SpeakeasyBase {
    groupFilter?: boolean;
    langFilter?: string;
}
export declare class FireteamGetMyClanFireteamsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class FireteamGetMyClanFireteamsRequest extends SpeakeasyBase {
    pathParams: FireteamGetMyClanFireteamsPathParams;
    queryParams: FireteamGetMyClanFireteamsQueryParams;
    security: FireteamGetMyClanFireteamsSecurity;
}
export declare class FireteamGetMyClanFireteamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
