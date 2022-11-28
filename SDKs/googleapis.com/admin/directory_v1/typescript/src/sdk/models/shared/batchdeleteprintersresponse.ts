import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureInfo } from "./failureinfo";



// BatchDeletePrintersResponse
/** 
 * Response for deleting existing printers in batch.
**/
export class BatchDeletePrintersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedPrinters", elemType: FailureInfo })
  failedPrinters?: FailureInfo[];

  @SpeakeasyMetadata({ data: "json, name=printerIds" })
  printerIds?: string[];
}
