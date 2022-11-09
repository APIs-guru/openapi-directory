import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailureInfo } from "./failureinfo";
import { Printer } from "./printer";


// BatchCreatePrintersResponse
/** 
 * Response for adding new printers in batch.
**/
export class BatchCreatePrintersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failures", elemType: shared.FailureInfo })
  failures?: FailureInfo[];

  @Metadata({ data: "json, name=printers", elemType: shared.Printer })
  printers?: Printer[];
}
