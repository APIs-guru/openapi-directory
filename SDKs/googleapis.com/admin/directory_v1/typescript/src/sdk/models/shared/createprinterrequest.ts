import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrinterInput } from "./printer";



// CreatePrinterRequestInput
/** 
 * Request for adding a new printer.
**/
export class CreatePrinterRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=printer" })
  printer?: PrinterInput;
}
