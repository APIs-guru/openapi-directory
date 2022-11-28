import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SingleSignOnRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}
export declare enum SingleSignOnRequestProviderEnum {
    Facebook = "Facebook"
}
export declare enum SingleSignOnRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings",
    Playback = "Playback"
}
export declare class SingleSignOnRequest extends SpeakeasyBase {
    cookieType?: SingleSignOnRequestCookieTypeEnum;
    linkAccounts?: boolean;
    provider: SingleSignOnRequestProviderEnum;
    scopes?: SingleSignOnRequestScopesEnum[];
    token: string;
}
