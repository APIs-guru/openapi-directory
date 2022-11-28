import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomMetric
/** 
 * Allows autoscaling based on Stackdriver metrics.
**/
export class CustomMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=singleInstanceAssignment" })
  singleInstanceAssignment?: number;

  @SpeakeasyMetadata({ data: "json, name=targetType" })
  targetType?: string;

  @SpeakeasyMetadata({ data: "json, name=targetUtilization" })
  targetUtilization?: number;
}
