import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricUnitEnum } from "./metricunitenum";



// MetricDatapoint
/** 
 * Describes the metric data point.
**/
export class MetricDatapoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: number;

  @SpeakeasyMetadata({ data: "json, name=maximum" })
  maximum?: number;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum?: number;

  @SpeakeasyMetadata({ data: "json, name=sampleCount" })
  sampleCount?: number;

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: MetricUnitEnum;
}
