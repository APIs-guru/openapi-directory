import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep } from "./googleanalyticsadminv1alphaaudiencesequencefilteraudiencesequencestep";
export declare enum GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum {
    AudienceFilterScopeUnspecified = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED",
    AudienceFilterScopeWithinSameEvent = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT",
    AudienceFilterScopeWithinSameSession = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION",
    AudienceFilterScopeAcrossAllSessions = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"
}
/**
 * Defines filters that must occur in a specific order for the user to be a member of the Audience.
**/
export declare class GoogleAnalyticsAdminV1alphaAudienceSequenceFilter extends SpeakeasyBase {
    scope?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum;
    sequenceMaximumDuration?: string;
    sequenceSteps?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep[];
}
