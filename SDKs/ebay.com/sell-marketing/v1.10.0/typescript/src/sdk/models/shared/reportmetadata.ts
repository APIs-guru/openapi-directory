import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionMetadata } from "./dimensionmetadata";
import { MetricMetadata } from "./metricmetadata";


// ReportMetadata
/** 
 * This type defines the fields included in the report.
**/
export class ReportMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionMetadata", elemType: shared.DimensionMetadata })
  dimensionMetadata?: DimensionMetadata[];

  @Metadata({ data: "json, name=maxNumberOfDimensionsToRequest" })
  maxNumberOfDimensionsToRequest?: number;

  @Metadata({ data: "json, name=maxNumberOfMetricsToRequest" })
  maxNumberOfMetricsToRequest?: number;

  @Metadata({ data: "json, name=metricMetadata", elemType: shared.MetricMetadata })
  metricMetadata?: MetricMetadata[];

  @Metadata({ data: "json, name=reportType" })
  reportType?: string;
}
