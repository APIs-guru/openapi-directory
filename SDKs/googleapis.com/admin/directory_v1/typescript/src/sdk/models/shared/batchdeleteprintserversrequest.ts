import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDeletePrintServersRequest
/** 
 * Request to delete multiple existing print servers in a batch.
**/
export class BatchDeletePrintServersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=printServerIds" })
  printServerIds?: string[];
}
