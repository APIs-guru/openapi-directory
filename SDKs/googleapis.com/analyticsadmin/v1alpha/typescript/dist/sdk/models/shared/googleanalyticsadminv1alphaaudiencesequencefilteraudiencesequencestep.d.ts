import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpression } from "./googleanalyticsadminv1alphaaudiencefilterexpression";
export declare enum GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum {
    AudienceFilterScopeUnspecified = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED",
    AudienceFilterScopeWithinSameEvent = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT",
    AudienceFilterScopeWithinSameSession = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION",
    AudienceFilterScopeAcrossAllSessions = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"
}
/**
 * A condition that must occur in the specified step order for this user to match the sequence.
**/
export declare class GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep extends SpeakeasyBase {
    constraintDuration?: string;
    filterExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
    immediatelyFollows?: boolean;
    scope?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum;
}
