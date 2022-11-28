import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { StatisticSet } from "./statisticset";
import { UnitEnum } from "./unitenum";



// MetricDatum
/** 
 * Internal only API.
**/
export class MetricDatum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName: string;

  @SpeakeasyMetadata({ data: "json, name=StatisticValues" })
  statisticValues?: StatisticSet;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: UnitEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
