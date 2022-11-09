import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionMetadata } from "./dimensionmetadata";
import { MetricMetadata } from "./metricmetadata";


// Metadata
/** 
 * The dimensions and metrics currently accepted in reporting methods.
**/
export class Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions", elemType: shared.DimensionMetadata })
  dimensions?: DimensionMetadata[];

  @Metadata({ data: "json, name=metrics", elemType: shared.MetricMetadata })
  metrics?: MetricMetadata[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
