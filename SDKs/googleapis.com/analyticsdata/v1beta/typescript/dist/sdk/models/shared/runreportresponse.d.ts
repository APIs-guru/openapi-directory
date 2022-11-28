import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionHeader } from "./dimensionheader";
import { Row } from "./row";
import { ResponseMetaData } from "./responsemetadata";
import { MetricHeader } from "./metricheader";
import { PropertyQuota } from "./propertyquota";
/**
 * The response report table corresponding to a request.
**/
export declare class RunReportResponse extends SpeakeasyBase {
    dimensionHeaders?: DimensionHeader[];
    kind?: string;
    maximums?: Row[];
    metadata?: ResponseMetaData;
    metricHeaders?: MetricHeader[];
    minimums?: Row[];
    propertyQuota?: PropertyQuota;
    rowCount?: number;
    rows?: Row[];
    totals?: Row[];
}
