import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceEventTrigger } from "./googleanalyticsadminv1alphaaudienceeventtrigger";
import { GoogleAnalyticsAdminV1alphaAudienceFilterClause } from "./googleanalyticsadminv1alphaaudiencefilterclause";
export declare enum GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum {
    AudienceExclusionDurationModeUnspecified = "AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED",
    ExcludeTemporarily = "EXCLUDE_TEMPORARILY",
    ExcludePermanently = "EXCLUDE_PERMANENTLY"
}
/**
 * A resource message representing a GA4 Audience.
**/
export declare class GoogleAnalyticsAdminV1alphaAudienceInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    eventTrigger?: GoogleAnalyticsAdminV1alphaAudienceEventTrigger;
    exclusionDurationMode?: GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum;
    filterClauses?: GoogleAnalyticsAdminV1alphaAudienceFilterClause[];
    membershipDurationDays?: number;
}
/**
 * A resource message representing a GA4 Audience.
**/
export declare class GoogleAnalyticsAdminV1alphaAudience extends SpeakeasyBase {
    adsPersonalizationEnabled?: boolean;
    description?: string;
    displayName?: string;
    eventTrigger?: GoogleAnalyticsAdminV1alphaAudienceEventTrigger;
    exclusionDurationMode?: GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum;
    filterClauses?: GoogleAnalyticsAdminV1alphaAudienceFilterClause[];
    membershipDurationDays?: number;
    name?: string;
}
