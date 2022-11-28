import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";



// Metric
/** 
 * Represents a specific metric.
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata()
  metricName?: string;

  @SpeakeasyMetadata()
  namespace?: string;
}
