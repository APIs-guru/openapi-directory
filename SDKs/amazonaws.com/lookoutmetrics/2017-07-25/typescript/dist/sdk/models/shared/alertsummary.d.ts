import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AlertStatusEnum } from "./alertstatusenum";
import { AlertTypeEnum } from "./alerttypeenum";
/**
 * Provides a summary of an alert's configuration.
**/
export declare class AlertSummary extends SpeakeasyBase {
    alertArn?: string;
    alertName?: string;
    alertSensitivityThreshold?: number;
    alertStatus?: AlertStatusEnum;
    alertType?: AlertTypeEnum;
    anomalyDetectorArn?: string;
    creationTime?: Date;
    lastModificationTime?: Date;
    tags?: Map<string, string>;
}
