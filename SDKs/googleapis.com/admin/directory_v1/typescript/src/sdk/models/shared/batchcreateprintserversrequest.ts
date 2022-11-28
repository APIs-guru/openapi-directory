import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreatePrintServerRequestInput } from "./createprintserverrequest";



// BatchCreatePrintServersRequestInput
/** 
 * Request to add multiple new print servers in a batch.
**/
export class BatchCreatePrintServersRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: CreatePrintServerRequestInput })
  requests?: CreatePrintServerRequestInput[];
}
