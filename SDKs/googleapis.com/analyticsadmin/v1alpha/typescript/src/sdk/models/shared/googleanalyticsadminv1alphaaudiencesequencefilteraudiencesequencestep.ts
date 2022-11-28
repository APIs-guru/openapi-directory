import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpression } from "./googleanalyticsadminv1alphaaudiencefilterexpression";


export enum GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum {
    AudienceFilterScopeUnspecified = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED",
    AudienceFilterScopeWithinSameEvent = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT",
    AudienceFilterScopeWithinSameSession = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION",
    AudienceFilterScopeAcrossAllSessions = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"
}


// GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep
/** 
 * A condition that must occur in the specified step order for this user to match the sequence.
**/
export class GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraintDuration" })
  constraintDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=filterExpression" })
  filterExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;

  @SpeakeasyMetadata({ data: "json, name=immediatelyFollows" })
  immediatelyFollows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum;
}
