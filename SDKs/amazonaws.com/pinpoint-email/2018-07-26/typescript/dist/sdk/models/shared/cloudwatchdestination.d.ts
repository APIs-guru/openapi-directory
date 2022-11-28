import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchDimensionConfiguration } from "./cloudwatchdimensionconfiguration";
/**
 * An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
**/
export declare class CloudWatchDestination extends SpeakeasyBase {
    dimensionConfigurations: CloudWatchDimensionConfiguration[];
}
