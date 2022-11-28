import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";
import { StandardUnitEnum } from "./standardunitenum";



// MetricStat
/** 
 * This structure defines the metric to be returned, along with the statistics, period, and units.
**/
export class MetricStat extends SpeakeasyBase {
  @SpeakeasyMetadata()
  metric: Metric;

  @SpeakeasyMetadata()
  period: number;

  @SpeakeasyMetadata()
  stat: string;

  @SpeakeasyMetadata()
  unit?: StandardUnitEnum;
}
