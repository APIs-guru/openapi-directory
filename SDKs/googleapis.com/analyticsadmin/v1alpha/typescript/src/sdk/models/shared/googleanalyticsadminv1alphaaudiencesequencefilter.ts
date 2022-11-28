import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep } from "./googleanalyticsadminv1alphaaudiencesequencefilteraudiencesequencestep";


export enum GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum {
    AudienceFilterScopeUnspecified = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED",
    AudienceFilterScopeWithinSameEvent = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT",
    AudienceFilterScopeWithinSameSession = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION",
    AudienceFilterScopeAcrossAllSessions = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"
}


// GoogleAnalyticsAdminV1alphaAudienceSequenceFilter
/** 
 * Defines filters that must occur in a specific order for the user to be a member of the Audience.
**/
export class GoogleAnalyticsAdminV1alphaAudienceSequenceFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=sequenceMaximumDuration" })
  sequenceMaximumDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=sequenceSteps", elemType: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep })
  sequenceSteps?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep[];
}
