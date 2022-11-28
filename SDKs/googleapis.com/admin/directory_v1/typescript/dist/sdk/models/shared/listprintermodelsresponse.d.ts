import { SpeakeasyBase } from "../../../internal/utils";
import { PrinterModel } from "./printermodel";
/**
 * Response for listing allowed printer models.
**/
export declare class ListPrinterModelsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    printerModels?: PrinterModel[];
}
