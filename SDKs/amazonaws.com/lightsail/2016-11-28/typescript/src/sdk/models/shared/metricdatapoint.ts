import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricUnitEnum } from "./metricunitenum";


// MetricDatapoint
/** 
 * Describes the metric data point.
**/
export class MetricDatapoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=average" })
  average?: number;

  @Metadata({ data: "json, name=maximum" })
  maximum?: number;

  @Metadata({ data: "json, name=minimum" })
  minimum?: number;

  @Metadata({ data: "json, name=sampleCount" })
  sampleCount?: number;

  @Metadata({ data: "json, name=sum" })
  sum?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=unit" })
  unit?: MetricUnitEnum;
}
