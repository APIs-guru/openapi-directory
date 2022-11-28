import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccessTokenTypeEnum {
    UserAccount = "UserAccount",
    UserProfile = "UserProfile"
}
export declare class AccessToken extends SpeakeasyBase {
    accountCreated?: boolean;
    expirationDate: Date;
    refreshable: boolean;
    type: AccessTokenTypeEnum;
    value: string;
}
