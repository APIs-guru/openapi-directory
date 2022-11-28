import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrinterModel } from "./printermodel";



// ListPrinterModelsResponse
/** 
 * Response for listing allowed printer models.
**/
export class ListPrinterModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=printerModels", elemType: PrinterModel })
  printerModels?: PrinterModel[];
}
