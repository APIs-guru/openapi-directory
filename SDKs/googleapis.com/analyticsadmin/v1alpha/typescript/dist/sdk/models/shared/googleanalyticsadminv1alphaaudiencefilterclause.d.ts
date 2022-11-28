import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceSequenceFilter } from "./googleanalyticsadminv1alphaaudiencesequencefilter";
import { GoogleAnalyticsAdminV1alphaAudienceSimpleFilter } from "./googleanalyticsadminv1alphaaudiencesimplefilter";
export declare enum GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum {
    AudienceClauseTypeUnspecified = "AUDIENCE_CLAUSE_TYPE_UNSPECIFIED",
    Include = "INCLUDE",
    Exclude = "EXCLUDE"
}
/**
 * A clause for defining either a simple or sequence filter. A filter can be inclusive (i.e., users satisfying the filter clause are included in the Audience) or exclusive (i.e., users satisfying the filter clause are excluded from the Audience).
**/
export declare class GoogleAnalyticsAdminV1alphaAudienceFilterClause extends SpeakeasyBase {
    clauseType?: GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum;
    sequenceFilter?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilter;
    simpleFilter?: GoogleAnalyticsAdminV1alphaAudienceSimpleFilter;
}
