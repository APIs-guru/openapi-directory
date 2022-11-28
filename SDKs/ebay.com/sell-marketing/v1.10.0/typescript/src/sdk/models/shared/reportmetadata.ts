import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetadata } from "./dimensionmetadata";
import { MetricMetadata } from "./metricmetadata";



// ReportMetadata
/** 
 * This type defines the fields included in the report.
**/
export class ReportMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionMetadata", elemType: DimensionMetadata })
  dimensionMetadata?: DimensionMetadata[];

  @SpeakeasyMetadata({ data: "json, name=maxNumberOfDimensionsToRequest" })
  maxNumberOfDimensionsToRequest?: number;

  @SpeakeasyMetadata({ data: "json, name=maxNumberOfMetricsToRequest" })
  maxNumberOfMetricsToRequest?: number;

  @SpeakeasyMetadata({ data: "json, name=metricMetadata", elemType: MetricMetadata })
  metricMetadata?: MetricMetadata[];

  @SpeakeasyMetadata({ data: "json, name=reportType" })
  reportType?: string;
}
