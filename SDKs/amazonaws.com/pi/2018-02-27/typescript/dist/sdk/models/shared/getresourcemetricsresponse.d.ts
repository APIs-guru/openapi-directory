import { SpeakeasyBase } from "../../../internal/utils";
import { MetricKeyDataPoints } from "./metrickeydatapoints";
export declare class GetResourceMetricsResponse extends SpeakeasyBase {
    alignedEndTime?: Date;
    alignedStartTime?: Date;
    identifier?: string;
    metricList?: MetricKeyDataPoints[];
    nextToken?: string;
}
