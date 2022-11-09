import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationProviderTypeEnum } from "./authorizationprovidertypeenum";
/**
 * The summary of the website authorization provider.
**/
export declare class WebsiteAuthorizationProviderSummary extends SpeakeasyBase {
    authorizationProviderId?: string;
    authorizationProviderType: AuthorizationProviderTypeEnum;
    createdTime?: Date;
    domainName?: string;
}
