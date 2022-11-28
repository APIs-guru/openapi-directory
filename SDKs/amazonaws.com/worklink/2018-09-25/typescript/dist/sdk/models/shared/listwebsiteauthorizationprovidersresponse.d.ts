import { SpeakeasyBase } from "../../../internal/utils";
import { WebsiteAuthorizationProviderSummary } from "./websiteauthorizationprovidersummary";
export declare class ListWebsiteAuthorizationProvidersResponse extends SpeakeasyBase {
    nextToken?: string;
    websiteAuthorizationProviders?: WebsiteAuthorizationProviderSummary[];
}
