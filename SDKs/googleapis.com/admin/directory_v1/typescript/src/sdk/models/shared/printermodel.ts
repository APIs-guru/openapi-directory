import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrinterModel
/** 
 * Printer manufacturer and model
**/
export class PrinterModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=makeAndModel" })
  makeAndModel?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;
}
