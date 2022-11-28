import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
import { BatchPermissionsRequestEntry } from "./batchpermissionsrequestentry";



// BatchPermissionsFailureEntry
/** 
 * A list of failures when performing a batch grant or batch revoke operation.
**/
export class BatchPermissionsFailureEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: ErrorDetail;

  @SpeakeasyMetadata({ data: "json, name=RequestEntry" })
  requestEntry?: BatchPermissionsRequestEntry;
}
