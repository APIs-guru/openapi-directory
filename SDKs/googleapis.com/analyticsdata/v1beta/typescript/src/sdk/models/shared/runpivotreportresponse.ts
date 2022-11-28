import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
import { DimensionHeader } from "./dimensionheader";
import { ResponseMetaData } from "./responsemetadata";
import { MetricHeader } from "./metricheader";
import { PivotHeader } from "./pivotheader";
import { PropertyQuota } from "./propertyquota";



// RunPivotReportResponse
/** 
 * The response pivot report table corresponding to a pivot request.
**/
export class RunPivotReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregates", elemType: Row })
  aggregates?: Row[];

  @SpeakeasyMetadata({ data: "json, name=dimensionHeaders", elemType: DimensionHeader })
  dimensionHeaders?: DimensionHeader[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ResponseMetaData;

  @SpeakeasyMetadata({ data: "json, name=metricHeaders", elemType: MetricHeader })
  metricHeaders?: MetricHeader[];

  @SpeakeasyMetadata({ data: "json, name=pivotHeaders", elemType: PivotHeader })
  pivotHeaders?: PivotHeader[];

  @SpeakeasyMetadata({ data: "json, name=propertyQuota" })
  propertyQuota?: PropertyQuota;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: Row })
  rows?: Row[];
}
