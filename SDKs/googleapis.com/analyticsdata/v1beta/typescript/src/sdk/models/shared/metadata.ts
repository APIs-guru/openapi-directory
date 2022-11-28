import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetadata } from "./dimensionmetadata";
import { MetricMetadata } from "./metricmetadata";



// Metadata
/** 
 * The dimensions and metrics currently accepted in reporting methods.
**/
export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: DimensionMetadata })
  dimensions?: DimensionMetadata[];

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: MetricMetadata })
  metrics?: MetricMetadata[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
