import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Action } from "./action";
import { AlertStatusEnum } from "./alertstatusenum";
import { AlertTypeEnum } from "./alerttypeenum";
/**
 * A configuration for Amazon SNS-integrated notifications.
**/
export declare class Alert extends SpeakeasyBase {
    action?: Action;
    alertArn?: string;
    alertDescription?: string;
    alertName?: string;
    alertSensitivityThreshold?: number;
    alertStatus?: AlertStatusEnum;
    alertType?: AlertTypeEnum;
    anomalyDetectorArn?: string;
    creationTime?: Date;
    lastModificationTime?: Date;
}
