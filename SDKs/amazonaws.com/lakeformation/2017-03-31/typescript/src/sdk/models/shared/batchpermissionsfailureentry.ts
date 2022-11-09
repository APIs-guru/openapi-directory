import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetail } from "./errordetail";
import { BatchPermissionsRequestEntry } from "./batchpermissionsrequestentry";


// BatchPermissionsFailureEntry
/** 
 * A list of failures when performing a batch grant or batch revoke operation.
**/
export class BatchPermissionsFailureEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: ErrorDetail;

  @Metadata({ data: "json, name=RequestEntry" })
  requestEntry?: BatchPermissionsRequestEntry;
}
