import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PaginationAuthScopeEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings"
}
export declare enum PaginationAuthTypeEnum {
    UserAccount = "UserAccount",
    UserProfile = "UserProfile"
}
export declare class PaginationAuth extends SpeakeasyBase {
    scope: PaginationAuthScopeEnum;
    type: PaginationAuthTypeEnum;
}
