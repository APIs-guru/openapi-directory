import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StandardUnitEnum } from "./standardunitenum";


// MetricTransformation
/** 
 * Indicates how to transform ingested log events to metric data in a CloudWatch metric.
**/
export class MetricTransformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: number;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: Map<string, string>;

  @Metadata({ data: "json, name=metricName" })
  metricName: string;

  @Metadata({ data: "json, name=metricNamespace" })
  metricNamespace: string;

  @Metadata({ data: "json, name=metricValue" })
  metricValue: string;

  @Metadata({ data: "json, name=unit" })
  unit?: StandardUnitEnum;
}
