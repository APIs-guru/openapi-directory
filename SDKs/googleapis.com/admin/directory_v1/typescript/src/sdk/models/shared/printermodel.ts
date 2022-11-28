import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrinterModel
/** 
 * Printer manufacturer and model
**/
export class PrinterModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=makeAndModel" })
  makeAndModel?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;
}
