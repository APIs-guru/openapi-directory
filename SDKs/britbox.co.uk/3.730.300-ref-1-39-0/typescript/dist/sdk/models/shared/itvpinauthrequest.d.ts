import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ItvPinAuthRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}
export declare enum ItvPinAuthRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings",
    Playback = "Playback"
}
export declare class ItvPinAuthRequest extends SpeakeasyBase {
    cookieType?: ItvPinAuthRequestCookieTypeEnum;
    pin: string;
    scopes?: ItvPinAuthRequestScopesEnum[];
}
