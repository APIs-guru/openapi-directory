import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";
/**
 * Contains error details for each device that failed to update its position.
**/
export declare class BatchUpdateDevicePositionError extends SpeakeasyBase {
    deviceId: string;
    error: BatchItemError;
    sampleTime: Date;
}
