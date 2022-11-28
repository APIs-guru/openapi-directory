import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
import { DimensionHeader } from "./dimensionheader";
import { ResponseMetaData } from "./responsemetadata";
import { MetricHeader } from "./metricheader";
import { PivotHeader } from "./pivotheader";
import { PropertyQuota } from "./propertyquota";
/**
 * The response pivot report table corresponding to a pivot request.
**/
export declare class RunPivotReportResponse extends SpeakeasyBase {
    aggregates?: Row[];
    dimensionHeaders?: DimensionHeader[];
    kind?: string;
    metadata?: ResponseMetaData;
    metricHeaders?: MetricHeader[];
    pivotHeaders?: PivotHeader[];
    propertyQuota?: PropertyQuota;
    rows?: Row[];
}
