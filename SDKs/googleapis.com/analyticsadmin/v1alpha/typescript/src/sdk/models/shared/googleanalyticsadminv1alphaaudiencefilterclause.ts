import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceSequenceFilter } from "./googleanalyticsadminv1alphaaudiencesequencefilter";
import { GoogleAnalyticsAdminV1alphaAudienceSimpleFilter } from "./googleanalyticsadminv1alphaaudiencesimplefilter";


export enum GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum {
    AudienceClauseTypeUnspecified = "AUDIENCE_CLAUSE_TYPE_UNSPECIFIED",
    Include = "INCLUDE",
    Exclude = "EXCLUDE"
}


// GoogleAnalyticsAdminV1alphaAudienceFilterClause
/** 
 * A clause for defining either a simple or sequence filter. A filter can be inclusive (i.e., users satisfying the filter clause are included in the Audience) or exclusive (i.e., users satisfying the filter clause are excluded from the Audience).
**/
export class GoogleAnalyticsAdminV1alphaAudienceFilterClause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clauseType" })
  clauseType?: GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sequenceFilter" })
  sequenceFilter?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilter;

  @SpeakeasyMetadata({ data: "json, name=simpleFilter" })
  simpleFilter?: GoogleAnalyticsAdminV1alphaAudienceSimpleFilter;
}
