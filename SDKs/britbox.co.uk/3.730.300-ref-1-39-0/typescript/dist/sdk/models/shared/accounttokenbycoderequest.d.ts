import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountTokenByCodeRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings",
    Playback = "Playback"
}
export declare class AccountTokenByCodeRequest extends SpeakeasyBase {
    code: string;
    id: string;
    scopes: AccountTokenByCodeRequestScopesEnum[];
}
