import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TokenRefreshRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}
export declare class TokenRefreshRequest extends SpeakeasyBase {
    cookieType?: TokenRefreshRequestCookieTypeEnum;
    token: string;
}
