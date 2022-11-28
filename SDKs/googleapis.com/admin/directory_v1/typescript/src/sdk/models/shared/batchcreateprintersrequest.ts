import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreatePrinterRequestInput } from "./createprinterrequest";



// BatchCreatePrintersRequestInput
/** 
 * Request for adding new printers in batch.
**/
export class BatchCreatePrintersRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: CreatePrinterRequestInput })
  requests?: CreatePrinterRequestInput[];
}
