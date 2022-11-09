import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaAudienceEventTrigger } from "./googleanalyticsadminv1alphaaudienceeventtrigger";
import { GoogleAnalyticsAdminV1alphaAudienceFilterClause } from "./googleanalyticsadminv1alphaaudiencefilterclause";

export enum GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum {
    AudienceExclusionDurationModeUnspecified = "AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED"
,    ExcludeTemporarily = "EXCLUDE_TEMPORARILY"
,    ExcludePermanently = "EXCLUDE_PERMANENTLY"
}


// GoogleAnalyticsAdminV1alphaAudience
/** 
 * A resource message representing a GA4 Audience.
**/
export class GoogleAnalyticsAdminV1alphaAudience extends SpeakeasyBase {
  @Metadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=eventTrigger" })
  eventTrigger?: GoogleAnalyticsAdminV1alphaAudienceEventTrigger;

  @Metadata({ data: "json, name=exclusionDurationMode" })
  exclusionDurationMode?: GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum;

  @Metadata({ data: "json, name=filterClauses", elemType: shared.GoogleAnalyticsAdminV1alphaAudienceFilterClause })
  filterClauses?: GoogleAnalyticsAdminV1alphaAudienceFilterClause[];

  @Metadata({ data: "json, name=membershipDurationDays" })
  membershipDurationDays?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
