import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrinterModel } from "./printermodel";


// ListPrinterModelsResponse
/** 
 * Response for listing allowed printer models.
**/
export class ListPrinterModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=printerModels", elemType: shared.PrinterModel })
  printerModels?: PrinterModel[];
}
