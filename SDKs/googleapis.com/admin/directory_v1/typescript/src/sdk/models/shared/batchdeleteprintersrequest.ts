import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDeletePrintersRequest
/** 
 * Request for deleting existing printers in batch.
**/
export class BatchDeletePrintersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=printerIds" })
  printerIds?: string[];
}
