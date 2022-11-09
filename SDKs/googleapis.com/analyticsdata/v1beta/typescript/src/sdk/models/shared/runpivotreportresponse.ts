import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Row } from "./row";
import { DimensionHeader } from "./dimensionheader";
import { ResponseMetaData } from "./responsemetadata";
import { MetricHeader } from "./metricheader";
import { PivotHeader } from "./pivotheader";
import { PropertyQuota } from "./propertyquota";
import { Row } from "./row";


// RunPivotReportResponse
/** 
 * The response pivot report table corresponding to a pivot request.
**/
export class RunPivotReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregates", elemType: shared.Row })
  aggregates?: Row[];

  @Metadata({ data: "json, name=dimensionHeaders", elemType: shared.DimensionHeader })
  dimensionHeaders?: DimensionHeader[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ResponseMetaData;

  @Metadata({ data: "json, name=metricHeaders", elemType: shared.MetricHeader })
  metricHeaders?: MetricHeader[];

  @Metadata({ data: "json, name=pivotHeaders", elemType: shared.PivotHeader })
  pivotHeaders?: PivotHeader[];

  @Metadata({ data: "json, name=propertyQuota" })
  propertyQuota?: PropertyQuota;

  @Metadata({ data: "json, name=rows", elemType: shared.Row })
  rows?: Row[];
}
