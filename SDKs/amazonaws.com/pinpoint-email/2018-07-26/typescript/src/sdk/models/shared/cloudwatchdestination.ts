import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchDimensionConfiguration } from "./cloudwatchdimensionconfiguration";



// CloudWatchDestination
/** 
 * An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
**/
export class CloudWatchDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DimensionConfigurations", elemType: CloudWatchDimensionConfiguration })
  dimensionConfigurations: CloudWatchDimensionConfiguration[];
}
