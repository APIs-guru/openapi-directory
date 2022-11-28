import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identity-Aware Proxy
**/
export declare class IdentityAwareProxy extends SpeakeasyBase {
    enabled?: boolean;
    oauth2ClientId?: string;
    oauth2ClientSecret?: string;
    oauth2ClientSecretSha256?: string;
}
