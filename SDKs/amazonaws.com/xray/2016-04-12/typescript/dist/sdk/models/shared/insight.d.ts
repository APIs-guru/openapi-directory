import { SpeakeasyBase } from "../../../internal/utils";
import { InsightCategoryEnum } from "./insightcategoryenum";
import { RequestImpactStatistics } from "./requestimpactstatistics";
import { ServiceId } from "./serviceid";
import { InsightStateEnum } from "./insightstateenum";
import { AnomalousService } from "./anomalousservice";
/**
 * When fault rates go outside of the expected range, X-Ray creates an insight. Insights tracks emergent issues within your applications.
**/
export declare class Insight extends SpeakeasyBase {
    categories?: InsightCategoryEnum[];
    clientRequestImpactStatistics?: RequestImpactStatistics;
    endTime?: Date;
    groupArn?: string;
    groupName?: string;
    insightId?: string;
    rootCauseServiceId?: ServiceId;
    rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
    startTime?: Date;
    state?: InsightStateEnum;
    summary?: string;
    topAnomalousServices?: AnomalousService[];
}
