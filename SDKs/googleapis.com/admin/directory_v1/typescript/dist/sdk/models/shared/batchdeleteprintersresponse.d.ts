import { SpeakeasyBase } from "../../../internal/utils";
import { FailureInfo } from "./failureinfo";
/**
 * Response for deleting existing printers in batch.
**/
export declare class BatchDeletePrintersResponse extends SpeakeasyBase {
    failedPrinters?: FailureInfo[];
    printerIds?: string[];
}
