import { SpeakeasyBase } from "../../../internal/utils";
import { CaptureStatusEnum } from "./capturestatusenum";
/**
 * <p/>
**/
export declare class DataCaptureConfigSummary extends SpeakeasyBase {
    captureStatus: CaptureStatusEnum;
    currentSamplingPercentage: number;
    destinationS3Uri: string;
    enableCapture: boolean;
    kmsKeyId: string;
}
