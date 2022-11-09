import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Printer } from "./printer";


// CreatePrinterRequest
/** 
 * Request for adding a new printer.
**/
export class CreatePrinterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=printer" })
  printer?: Printer;
}
