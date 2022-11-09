import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDeletePrintersRequest
/** 
 * Request for deleting existing printers in batch.
**/
export class BatchDeletePrintersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=printerIds" })
  printerIds?: string[];
}
