import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";
/**
 * Contains error details for each device that didn't return a position.
**/
export declare class BatchGetDevicePositionError extends SpeakeasyBase {
    deviceId: string;
    error: BatchItemError;
}
