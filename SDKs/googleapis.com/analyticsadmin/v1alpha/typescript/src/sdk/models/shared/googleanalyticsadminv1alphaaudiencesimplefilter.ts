import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpression } from "./googleanalyticsadminv1alphaaudiencefilterexpression";


export enum GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum {
    AudienceFilterScopeUnspecified = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED",
    AudienceFilterScopeWithinSameEvent = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT",
    AudienceFilterScopeWithinSameSession = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION",
    AudienceFilterScopeAcrossAllSessions = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"
}


// GoogleAnalyticsAdminV1alphaAudienceSimpleFilter
/** 
 * Defines a simple filter that a user must satisfy to be a member of the Audience.
**/
export class GoogleAnalyticsAdminV1alphaAudienceSimpleFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterExpression" })
  filterExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum;
}
