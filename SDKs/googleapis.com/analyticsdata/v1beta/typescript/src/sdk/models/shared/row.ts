import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { MetricValue } from "./metricvalue";



// Row
/** 
 * Report data for each row. For example if RunReportRequest contains: ```none "dimensions": [ { "name": "eventName" }, { "name": "countryId" } ], "metrics": [ { "name": "eventCount" } ] ``` One row with 'in_app_purchase' as the eventName, 'JP' as the countryId, and 15 as the eventCount, would be: ```none "dimensionValues": [ { "value": "in_app_purchase" }, { "value": "JP" } ], "metricValues": [ { "value": "15" } ] ```
**/
export class Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionValues", elemType: DimensionValue })
  dimensionValues?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=metricValues", elemType: MetricValue })
  metricValues?: MetricValue[];
}
