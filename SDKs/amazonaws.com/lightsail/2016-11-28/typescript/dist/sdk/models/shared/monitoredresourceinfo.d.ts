import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * <p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
**/
export declare class MonitoredResourceInfo extends SpeakeasyBase {
    arn?: string;
    name?: string;
    resourceType?: ResourceTypeEnum;
}
