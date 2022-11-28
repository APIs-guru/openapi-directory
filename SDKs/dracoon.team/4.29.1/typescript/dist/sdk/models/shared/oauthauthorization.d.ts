import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OAuthAuthorizationUserAgentCategoryEnum {
    Browser = "browser",
    Native = "native",
    Unknown = "unknown"
}
/**
 * OAuth authorization
**/
export declare class OAuthAuthorization extends SpeakeasyBase {
    clientId: string;
    clientName: string;
    createdAt?: Date;
    expiresAt?: Date;
    id?: number;
    isCurrentAuthorization?: boolean;
    isStandard?: boolean;
    usedAt?: Date;
    userAgentCategory: OAuthAuthorizationUserAgentCategoryEnum;
    userAgentInfo?: string;
    userAgentOs?: string;
    userAgentType?: string;
}
