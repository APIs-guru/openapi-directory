import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
import { BatchPermissionsRequestEntry } from "./batchpermissionsrequestentry";
/**
 * A list of failures when performing a batch grant or batch revoke operation.
**/
export declare class BatchPermissionsFailureEntry extends SpeakeasyBase {
    error?: ErrorDetail;
    requestEntry?: BatchPermissionsRequestEntry;
}
