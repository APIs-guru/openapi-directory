import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionHeader } from "./dimensionheader";
import { Row } from "./row";
import { ResponseMetaData } from "./responsemetadata";
import { MetricHeader } from "./metricheader";
import { PropertyQuota } from "./propertyquota";



// RunReportResponse
/** 
 * The response report table corresponding to a request.
**/
export class RunReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionHeaders", elemType: DimensionHeader })
  dimensionHeaders?: DimensionHeader[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=maximums", elemType: Row })
  maximums?: Row[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ResponseMetaData;

  @SpeakeasyMetadata({ data: "json, name=metricHeaders", elemType: MetricHeader })
  metricHeaders?: MetricHeader[];

  @SpeakeasyMetadata({ data: "json, name=minimums", elemType: Row })
  minimums?: Row[];

  @SpeakeasyMetadata({ data: "json, name=propertyQuota" })
  propertyQuota?: PropertyQuota;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: Row })
  rows?: Row[];

  @SpeakeasyMetadata({ data: "json, name=totals", elemType: Row })
  totals?: Row[];
}
