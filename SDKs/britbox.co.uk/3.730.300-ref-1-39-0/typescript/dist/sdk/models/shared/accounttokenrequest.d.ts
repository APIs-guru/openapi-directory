import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountTokenRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}
export declare enum AccountTokenRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings",
    Playback = "Playback"
}
export declare class AccountTokenRequest extends SpeakeasyBase {
    cookieType?: AccountTokenRequestCookieTypeEnum;
    email: string;
    password: string;
    scopes: AccountTokenRequestScopesEnum[];
}
