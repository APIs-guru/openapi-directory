import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";
import { Metric } from "./metric";


// DimensionMetric
/** 
 * This complex type defines a the customer service metrics and seller benchmark performance related to a given dimension.
**/
export class DimensionMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimension" })
  dimension?: Dimension;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];
}
