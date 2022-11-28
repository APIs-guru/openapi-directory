import { SpeakeasyBase } from "../../../internal/utils";
import { FailureInfo } from "./failureinfo";
import { Printer } from "./printer";
/**
 * Response for adding new printers in batch.
**/
export declare class BatchCreatePrintersResponse extends SpeakeasyBase {
    failures?: FailureInfo[];
    printers?: Printer[];
}
