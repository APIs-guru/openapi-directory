import { SpeakeasyBase } from "../../../internal/utils";
import { InsightCategoryEnum } from "./insightcategoryenum";
import { RequestImpactStatistics } from "./requestimpactstatistics";
import { ServiceId } from "./serviceid";
import { InsightStateEnum } from "./insightstateenum";
import { AnomalousService } from "./anomalousservice";
/**
 * Information that describes an insight.
**/
export declare class InsightSummary extends SpeakeasyBase {
    categories?: InsightCategoryEnum[];
    clientRequestImpactStatistics?: RequestImpactStatistics;
    endTime?: Date;
    groupArn?: string;
    groupName?: string;
    insightId?: string;
    lastUpdateTime?: Date;
    rootCauseServiceId?: ServiceId;
    rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
    startTime?: Date;
    state?: InsightStateEnum;
    summary?: string;
    topAnomalousServices?: AnomalousService[];
}
