import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchDimensionConfiguration } from "./cloudwatchdimensionconfiguration";


// CloudWatchDestination
/** 
 * An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
**/
export class CloudWatchDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=DimensionConfigurations", elemType: shared.CloudWatchDimensionConfiguration })
  dimensionConfigurations: CloudWatchDimensionConfiguration[];
}
