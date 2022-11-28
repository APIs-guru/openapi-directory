import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePrinterRequestInput } from "./createprinterrequest";
/**
 * Request for adding new printers in batch.
**/
export declare class BatchCreatePrintersRequestInput extends SpeakeasyBase {
    requests?: CreatePrinterRequestInput[];
}
