import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionValue } from "./dimensionvalue";
import { MetricValue } from "./metricvalue";


// Row
/** 
 * Report data for each row. For example if RunReportRequest contains: ```none "dimensions": [ { "name": "eventName" }, { "name": "countryId" } ], "metrics": [ { "name": "eventCount" } ] ``` One row with 'in_app_purchase' as the eventName, 'JP' as the countryId, and 15 as the eventCount, would be: ```none "dimensionValues": [ { "value": "in_app_purchase" }, { "value": "JP" } ], "metricValues": [ { "value": "15" } ] ```
**/
export class Row extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionValues", elemType: shared.DimensionValue })
  dimensionValues?: DimensionValue[];

  @Metadata({ data: "json, name=metricValues", elemType: shared.MetricValue })
  metricValues?: MetricValue[];
}
