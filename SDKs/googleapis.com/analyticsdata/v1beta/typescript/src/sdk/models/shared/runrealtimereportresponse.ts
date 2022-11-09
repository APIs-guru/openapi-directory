import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionHeader } from "./dimensionheader";
import { Row } from "./row";
import { MetricHeader } from "./metricheader";
import { Row } from "./row";
import { PropertyQuota } from "./propertyquota";
import { Row } from "./row";
import { Row } from "./row";


// RunRealtimeReportResponse
/** 
 * The response realtime report table corresponding to a request.
**/
export class RunRealtimeReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionHeaders", elemType: shared.DimensionHeader })
  dimensionHeaders?: DimensionHeader[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=maximums", elemType: shared.Row })
  maximums?: Row[];

  @Metadata({ data: "json, name=metricHeaders", elemType: shared.MetricHeader })
  metricHeaders?: MetricHeader[];

  @Metadata({ data: "json, name=minimums", elemType: shared.Row })
  minimums?: Row[];

  @Metadata({ data: "json, name=propertyQuota" })
  propertyQuota?: PropertyQuota;

  @Metadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @Metadata({ data: "json, name=rows", elemType: shared.Row })
  rows?: Row[];

  @Metadata({ data: "json, name=totals", elemType: shared.Row })
  totals?: Row[];
}
