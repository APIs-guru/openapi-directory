import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPermissionsRequestEntry } from "./batchpermissionsrequestentry";
export declare class BatchRevokePermissionsRequest extends SpeakeasyBase {
    catalogId?: string;
    entries: BatchPermissionsRequestEntry[];
}
