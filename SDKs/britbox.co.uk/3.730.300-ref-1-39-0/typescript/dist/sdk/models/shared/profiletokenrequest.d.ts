import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProfileTokenRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}
export declare enum ProfileTokenRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings"
}
export declare class ProfileTokenRequest extends SpeakeasyBase {
    cookieType?: ProfileTokenRequestCookieTypeEnum;
    pin?: string;
    profileId: string;
    scopes: ProfileTokenRequestScopesEnum[];
}
