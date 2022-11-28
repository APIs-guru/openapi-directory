import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionHeader } from "./dimensionheader";
import { Row } from "./row";
import { MetricHeader } from "./metricheader";
import { PropertyQuota } from "./propertyquota";
/**
 * The response realtime report table corresponding to a request.
**/
export declare class RunRealtimeReportResponse extends SpeakeasyBase {
    dimensionHeaders?: DimensionHeader[];
    kind?: string;
    maximums?: Row[];
    metricHeaders?: MetricHeader[];
    minimums?: Row[];
    propertyQuota?: PropertyQuota;
    rowCount?: number;
    rows?: Row[];
    totals?: Row[];
}
