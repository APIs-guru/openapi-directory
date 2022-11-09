import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreatePrintServerRequest } from "./createprintserverrequest";


// BatchCreatePrintServersRequest
/** 
 * Request to add multiple new print servers in a batch.
**/
export class BatchCreatePrintServersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.CreatePrintServerRequest })
  requests?: CreatePrintServerRequest[];
}
