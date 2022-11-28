import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardUnitEnum } from "./standardunitenum";



// MetricTransformation
/** 
 * Indicates how to transform ingested log events to metric data in a CloudWatch metric.
**/
export class MetricTransformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName: string;

  @SpeakeasyMetadata({ data: "json, name=metricNamespace" })
  metricNamespace: string;

  @SpeakeasyMetadata({ data: "json, name=metricValue" })
  metricValue: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: StandardUnitEnum;
}
