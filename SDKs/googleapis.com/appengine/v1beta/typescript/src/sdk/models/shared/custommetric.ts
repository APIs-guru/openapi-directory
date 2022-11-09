import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomMetric
/** 
 * Allows autoscaling based on Stackdriver metrics.
**/
export class CustomMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=metricName" })
  metricName?: string;

  @Metadata({ data: "json, name=singleInstanceAssignment" })
  singleInstanceAssignment?: number;

  @Metadata({ data: "json, name=targetType" })
  targetType?: string;

  @Metadata({ data: "json, name=targetUtilization" })
  targetUtilization?: number;
}
