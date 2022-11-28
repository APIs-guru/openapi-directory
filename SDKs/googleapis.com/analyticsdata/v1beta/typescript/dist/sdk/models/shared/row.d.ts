import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { MetricValue } from "./metricvalue";
/**
 * Report data for each row. For example if RunReportRequest contains: ```none "dimensions": [ { "name": "eventName" }, { "name": "countryId" } ], "metrics": [ { "name": "eventCount" } ] ``` One row with 'in_app_purchase' as the eventName, 'JP' as the countryId, and 15 as the eventCount, would be: ```none "dimensionValues": [ { "value": "in_app_purchase" }, { "value": "JP" } ], "metricValues": [ { "value": "15" } ] ```
**/
export declare class Row extends SpeakeasyBase {
    dimensionValues?: DimensionValue[];
    metricValues?: MetricValue[];
}
