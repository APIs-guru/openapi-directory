import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDeletePrintServersRequest
/** 
 * Request to delete multiple existing print servers in a batch.
**/
export class BatchDeletePrintServersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=printServerIds" })
  printServerIds?: string[];
}
