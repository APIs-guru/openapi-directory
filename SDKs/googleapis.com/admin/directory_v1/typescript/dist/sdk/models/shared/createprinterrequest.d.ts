import { SpeakeasyBase } from "../../../internal/utils";
import { PrinterInput } from "./printer";
/**
 * Request for adding a new printer.
**/
export declare class CreatePrinterRequestInput extends SpeakeasyBase {
    parent?: string;
    printer?: PrinterInput;
}
