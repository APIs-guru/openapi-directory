import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceEventTrigger } from "./googleanalyticsadminv1alphaaudienceeventtrigger";
import { GoogleAnalyticsAdminV1alphaAudienceFilterClause } from "./googleanalyticsadminv1alphaaudiencefilterclause";


export enum GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum {
    AudienceExclusionDurationModeUnspecified = "AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED",
    ExcludeTemporarily = "EXCLUDE_TEMPORARILY",
    ExcludePermanently = "EXCLUDE_PERMANENTLY"
}


// GoogleAnalyticsAdminV1alphaAudienceInput
/** 
 * A resource message representing a GA4 Audience.
**/
export class GoogleAnalyticsAdminV1alphaAudienceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=eventTrigger" })
  eventTrigger?: GoogleAnalyticsAdminV1alphaAudienceEventTrigger;

  @SpeakeasyMetadata({ data: "json, name=exclusionDurationMode" })
  exclusionDurationMode?: GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=filterClauses", elemType: GoogleAnalyticsAdminV1alphaAudienceFilterClause })
  filterClauses?: GoogleAnalyticsAdminV1alphaAudienceFilterClause[];

  @SpeakeasyMetadata({ data: "json, name=membershipDurationDays" })
  membershipDurationDays?: number;
}


// GoogleAnalyticsAdminV1alphaAudience
/** 
 * A resource message representing a GA4 Audience.
**/
export class GoogleAnalyticsAdminV1alphaAudience extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=eventTrigger" })
  eventTrigger?: GoogleAnalyticsAdminV1alphaAudienceEventTrigger;

  @SpeakeasyMetadata({ data: "json, name=exclusionDurationMode" })
  exclusionDurationMode?: GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=filterClauses", elemType: GoogleAnalyticsAdminV1alphaAudienceFilterClause })
  filterClauses?: GoogleAnalyticsAdminV1alphaAudienceFilterClause[];

  @SpeakeasyMetadata({ data: "json, name=membershipDurationDays" })
  membershipDurationDays?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
