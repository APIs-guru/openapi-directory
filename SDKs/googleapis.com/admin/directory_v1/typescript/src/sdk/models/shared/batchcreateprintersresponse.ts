import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureInfo } from "./failureinfo";
import { Printer } from "./printer";



// BatchCreatePrintersResponse
/** 
 * Response for adding new printers in batch.
**/
export class BatchCreatePrintersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failures", elemType: FailureInfo })
  failures?: FailureInfo[];

  @SpeakeasyMetadata({ data: "json, name=printers", elemType: Printer })
  printers?: Printer[];
}
