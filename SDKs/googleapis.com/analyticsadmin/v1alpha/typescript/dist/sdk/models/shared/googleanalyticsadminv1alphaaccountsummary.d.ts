import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaPropertySummary } from "./googleanalyticsadminv1alphapropertysummary";
/**
 * A virtual resource representing an overview of an account and all its child GA4 properties.
**/
export declare class GoogleAnalyticsAdminV1alphaAccountSummary extends SpeakeasyBase {
    account?: string;
    displayName?: string;
    name?: string;
    propertySummaries?: GoogleAnalyticsAdminV1alphaPropertySummary[];
}
