import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";
import { StatisticSet } from "./statisticset";
import { UnitEnum } from "./unitenum";


// MetricDatum
/** 
 * Internal only API.
**/
export class MetricDatum extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions", elemType: shared.Dimension })
  dimensions?: Dimension[];

  @Metadata({ data: "json, name=MetricName" })
  metricName: string;

  @Metadata({ data: "json, name=StatisticValues" })
  statisticValues?: StatisticSet;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=Unit" })
  unit?: UnitEnum;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
