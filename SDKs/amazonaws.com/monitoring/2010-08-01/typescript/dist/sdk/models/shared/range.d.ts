import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies one range of days or times to exclude from use for training an anomaly detection model.
**/
export declare class Range extends SpeakeasyBase {
    endTime: Date;
    startTime: Date;
}
