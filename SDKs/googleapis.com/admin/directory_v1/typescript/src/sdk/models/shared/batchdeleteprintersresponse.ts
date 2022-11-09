import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailureInfo } from "./failureinfo";


// BatchDeletePrintersResponse
/** 
 * Response for deleting existing printers in batch.
**/
export class BatchDeletePrintersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedPrinters", elemType: shared.FailureInfo })
  failedPrinters?: FailureInfo[];

  @Metadata({ data: "json, name=printerIds" })
  printerIds?: string[];
}
