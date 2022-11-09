import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreatePrinterRequest } from "./createprinterrequest";


// BatchCreatePrintersRequest
/** 
 * Request for adding new printers in batch.
**/
export class BatchCreatePrintersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.CreatePrinterRequest })
  requests?: CreatePrinterRequest[];
}
